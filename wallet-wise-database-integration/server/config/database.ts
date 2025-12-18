import { Pool, QueryResult, QueryResultRow } from 'pg'; // pg is a package imported from Node.js PostgresSQL client library
import dotenv from 'dotenv';
import path from 'path';

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

// We export an object that contains a property called query, 
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database
// Type-safe query function
export const query = async <T extends QueryResultRow = any>(
  text: string, // - text: SQL query string
  params?: unknown[] // - params: Optional array of parameters for prepared statements
): Promise<QueryResult<T>> => { // Query function with TypeScript types:
  console.log("executed query", text); // - Returns: Promise that resolves to QueryResult (contains rows, rowCount, etc.)
  return pool.query<T>(text, params);
};

// Export the pool if needed elsewhere
export { pool };
export default query; // Optional: default export for the query function