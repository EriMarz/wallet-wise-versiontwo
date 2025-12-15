import express, { Request, Response} from "express";
import 'dotenv/config';
import pool from "./server/models/database.ts"; 
// import { Pool, QueryResult } from 'pg';
import cors from "cors"
import apiRouter from'./routes/api';

const app = express();
const PORT = 3000; // 5432 this is the port in .env

app.use(cors())
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRouter);

// test server is working by creating an endpoint "test" that asks the db to return the number one ... should work even without any specific tables yet
app.get("/test", async (req: Response, res: Response) => {
    try{
        const result = await pool.query(
            'SELECT * FROM "Adventures"'
        );
        // destructure / stringify / etc BEFORE sending it to the frontend -> data you want is on result.rows[0]
        res.send(`Yay! Database is connected ${JSON.stringify(result.rows[0])}`);
        console.log("Result from DB: ", result);
    } catch (err) {
        console.error(err);
        res.status(500).send(`Womp, womp! Database is not connected ${err}`)
    }
});


//loop through the results rows to populate the adventure list 
//to get the first page rendering the all adventure data, I think we'd use app.get("api/adventures", (req,res)=> {SQL syntax...})
//app.get("/adventures", async (req: Request, res: Response) =>  {

//}



//create posts: start new adventure button and Add expense button

app.post("/api/adventure", async (req: Request, res: Response) => {
    try {
        const { name } = req.body;
        const result = await pool.query(
            'INSERT INTO "Adventures" (name) VALUES ($1) RETURNING *',
            [name]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send(`Error creating adventure: ${err}`);
    }
})



//Create gets: for adventure page, adventure detail (expenses and balances sections)



//400 error handler



//global error handler 500



app.listen(PORT, ()=>{ console.log(`Listening on port ${PORT}...`); });


export default app;
