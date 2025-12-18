import { RequestHandler, Request, Response, NextFunction } from 'express';
import { Adventure } from '../models/adventure';
import pool from '../config/database.ts';

interface AdventureController {
  getAdventure: RequestHandler;
  getSpecificAdventure: RequestHandler;
  testDBConnection: RequestHandler;
  getAllAdventuresQuery: RequestHandler;
}

const adventureController = {} as AdventureController;
// Two Queries, adventurebyID and allAdventures
// SQL queries to pull the data from the database

// Query to get all adventures
adventureController.getAllAdventuresQuery = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await pool.query('SELECT * FROM adventures;');
    res.locals.data = result.rows;
    return next();
  } catch (err) {
    return next({
      log: `Error in getAllAdventuresQuery: ${err}`,
      status: 500,
      message: { err: 'An error occurred while retrieving adventures.' },
    });
  }
};
// Query to get adventure by ID
const getAdventureByIdQuery = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const adventureID = req.params.id;
  try {
    const result = await pool.query('SELECT * FROM adventures WHERE id = $1;', [
      adventureID,
    ]);
    res.locals.data = result.rows[0];
    return next();
  } catch (err) {
    return next({
      log: `Error in getAdventureByIDQuery: ${err}`,
      status: 500,
      message: { err: 'An error occurred while retrieving the adventure.' },
    });
  }
};
//Controller to get entire database

// adventureController.getAdventure = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const result = await pool.query(allAdventureQuery);
//     const rows = result['rows'];

//     res.locals.allAdventures = rows;
//     return next();
//   } catch (err) {
//     console.error(err);
//     return next({
//       log: `Database error: ${err}`,
//       status: 500,
//       message: { err: 'Adventure Controller getAdventure Error' },
//     });
//   }
// };

export default adventureController;
