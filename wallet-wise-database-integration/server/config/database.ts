import { Pool } from 'pg';
import dotenv from 'dotenv';
import type { QueryResult } from "pg"; 
//makes it so that we import only type declarations ... pg is a package imported from Node.js PostgresSQL client library
import { createClient } from '@supabase/supabase-js'; // create a single supabase client for interacting with the db
import { Database } from './database.types'
// import { supabaseUrl, supabaseKey, supabaseAnonKey, supabasePword, PORT } from './.env';
// from Arsy's debugging with AI
import dotenv from 'dotenv';
import path from 'path';
const supabaseKey = process.env.supabaseKey;

// copy-pasta from https://supabase.com/docs/reference/javascript/typescript-support
// const supabase = createClient<Database>(
//   process.env.supabaseUrl,
//   process.env.supabaseAnonKey
// )

// from Arsy's debugging with AI
// Load .env file
dotenv.config({ path: path.resolve(__dirname, '../.env') });

// Export the variables
export const supabaseUrl = process.env.SUPABASE_URL as string;
export const supabaseKey = process.env.SUPABASE_KEY as string; // Service Role Key (for backend)
export const supabaseAnonKey = process.env.SUPABASE_ANON_KEY as string; // Anon Key (for frontend client)
export const supabasePword = process.env.SUPABASE_PWORD as string;
export const PORT = process.env.PORT || 3000;

// Simple validation to ensure critical keys are present
if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase URL or Key in .env file");
}

// start of Kim's code
// Create a connection pool - this manages multiple database connections efficiently
// A pool reuses connections instead of creating new ones for each query
const pool = new Pool({
  connectionString: `postgresql://postgres.fwchlqiodlltmbwefalq:${supabasePword}@aws-0-us-west-2.pooler.supabase.com:${PORT}/postgres`,
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

export default pool;

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