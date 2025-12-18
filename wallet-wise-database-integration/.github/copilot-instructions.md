# Wallet Wise - AI Coding Agent Instructions

## Architecture Overview

**Wallet Wise** is a full-stack expense tracking app for shared adventures (trips/group expenses).

### Tech Stack

- **Frontend**: React 19 + TypeScript + React Router v7 + Tailwind CSS 4 + Vite
- **Backend**: Express.js + TypeScript + Node.js
- **Database**: PostgreSQL (via Supabase pooler)
- **Testing**: Vitest + React Testing Library
- **Database Package**: `pg` (PostgreSQL client)

### File Structure

```
client/src/
  ├── components/
  │   ├── functional/      # Logic components (Buttons, Forms)
  │   ├── layouts/         # Presentational components (navbar, header, footer, List)
  │   └── _tests_/         # Component tests
  ├── pages/               # Route-level components (home, expenses, balances, etc.)
  └── _tests_/             # Page tests

server/
  ├── config/database.ts   # PostgreSQL pool connection & query wrapper
  ├── controllers/         # Business logic & SQL queries
  ├── models/              # TypeScript interfaces (Adventure, User, etc.)
  ├── routes/              # Express Router definitions
  └── _tests_/             # Server tests
```

## Data Flow & Integration

### Frontend → Backend Communication

- React Router (`App.tsx`) handles routing
- Pages call backend API at `http://localhost:3000/api/*`
- Example: `GET /api/adventures` returns all adventures

### Backend Flow (Controllers Pattern)

1. **Routes** (`adventureRoutes.ts`): Define endpoints → call controller functions
2. **Controllers** (`adventureController.ts`): Execute SQL queries via database module
3. **Database** (`database.ts`): Pool-based wrapper around `pg` that logs queries

Example from code:

```typescript
// routes/adventureRoutes.ts → calls controller
router.get("/adventures", getAllAdventures);

// server.ts also has inline endpoints (to be moved to controllers):
app.get("/api/adventures", async (req, res) => {
  const result = await pool.query('SELECT * FROM "Adventures"');
  res.status(200).json(result);
});
```

## Critical Developer Workflows

### Running the Application

- **Frontend dev server**: `npm run dev` (Vite, port 5173)
- **Backend server**: `npm run server` (tsx watch, port 3000, auto-restarts on changes)
- **Build frontend**: `npm run build`
- **Linting**: `npm run lint` (ESLint)
- **Testing**: `npm test` (Vitest with jsdom environment)

### Database Testing

- Use `/test` endpoint (server.ts line 17) to verify database connection
- Returns first row from "Adventures" table as JSON
- Runs against Supabase PostgreSQL instance (credentials in `.env`)

## Key Project Conventions

### Component Patterns

- **Functional Components**: Use TypeScript interfaces for props (see `Button` in `Buttons.tsx`)
- **Styling**: Tailwind CSS with baseStyle/activeStyle/inactiveStyle pattern
- **Props Extension**: Use `ComponentProps<"button">` spread syntax for flexibility

### Database Patterns

- **Connection Pool**: `database.ts` exports pool instance; all queries go through it
- **Logging**: Pool wrapper logs every executed query to console
- **Types**: Import `QueryResult<any>` from `pg` for type safety
- **Parameterized Queries**: Use `$1`, `$2` placeholders to prevent SQL injection

### TypeScript Usage

- Use `type` imports for declarations: `import type { QueryResult } from "pg"`
- Database connection strings use template literals for environment variables
- Always set proper return types: `Promise<void>`, `Promise<QueryResult<T>>`

## Active Refactoring & Known Issues

### In Progress (from cleanCoding.txt)

1. **API Router Organization**: Inline endpoints in `server.ts` should move to route files (e.g., create `apiRouter`)
2. **Controller Implementation**: SQL logic currently in `server.ts`; should migrate to `adventureController.ts`
3. **Missing Features**:
   - User model/routes (login/registration exist in routing, but no backend)
   - Complete adventure CRUD (create works, update/delete pending)
   - Expense and balance calculation endpoints

### Database Table Names

- Uses quoted identifiers: `"Adventures"` (case-sensitive PostgreSQL)
- Ensure all table queries match this casing exactly

## Integration Points to Know

### Supabase Integration

- Used for PostgreSQL hosting (connection pooler in `database.ts`)
- Supabase client imported but `pg` is the primary driver
- Connection string built from environment variables: `supabaseUrl`, `supabaseKey`, `supabasePword`

### CORS Enabled

- Backend uses `cors()` middleware to allow frontend requests
- No whitelist configured; open to all origins (adjust for production)

### Environment Variables Required

```
supabaseUrl, supabaseKey, supabaseAnonKey, supabasePword, PORT
```

## When Adding Features

1. **New Endpoints**: Create route in `server/routes/*`, controller function in `server/controllers/*`
2. **New Components**: Use functional component pattern with typed props in `client/src/components/`
3. **Database Changes**: Update types in `server/models/`, test with `/test` endpoint
4. **Testing**: Add tests in `_tests_/` folders; Vitest uses globals (`describe`, `it`, `expect`)
5. **Styling**: Apply Tailwind CSS classes; follow baseStyle/variant pattern for reusable components
