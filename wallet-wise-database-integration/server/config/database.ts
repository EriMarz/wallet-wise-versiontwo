import { Pool } from 'pg';
import type { QueryResult } from "pg"; 
//makes it so that we import only type declarations ... pg is a package imported from Node.js PostgresSQL client library

// const pool = new Pool({
//   connectionString: "postgresql://postgres.fwchlqiodlltmbwefalq:expressjs@aws-0-us-west-2.pooler.supabase.com:5432/postgres",
// ssl: { rejectUnauthorized: false },//
// });

// Create a connection pool - this manages multiple database connections efficiently
// A pool reuses connections instead of creating new ones for each query
const pool = new Pool({
  connectionString: "postgresql://postgres.fwchlqiodlltmbwefalq:expressjs@aws-0-us-west-2.pooler.supabase.com:5432/postgres",
  ssl: { rejectUnauthorized: false },
});

// Test database connection function
// TypeScript: Promise<void> means this function returns a Promise that resolves to nothing
async function testConnection(): Promise<void> {
  try {
    const client = await pool.connect();
    console.log('🥳 connected to database');
    client.release(); // Always release the connection back to the pool
  }
  catch(err) {
    console.log('🚨 could not connect to database:', err);
  }
}

// Test the connection when the module loads
testConnection();

export default {
  //could we use unknown instead of any to be more type safe?
  query: (text: string, params?: any[]): Promise<QueryResult<any>> => {
    console.log("executed query", text);
    return pool.query(text, params);
  },
};

// export default pool;


//// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database
// export default {
//   // Query function with TypeScript types:
//   // - text: SQL query string
//   // - params: Optional array of parameters for prepared statements
//   // - Returns: Promise that resolves to QueryResult (contains rows, rowCount, etc.)
//   query: (text: string, params?: any[]): Promise<QueryResult<any>> => {
//     // console.log("executed query", text);
//     return pool.query(text, params);
//   },
// };