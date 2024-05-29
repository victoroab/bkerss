import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';

// for migrations
const migrationClient = postgres("postgres://postgres:victor@localhost:5432/bkerss-db", { max: 1 });

// for query purposes
const queryClient = postgres("postgres://postgres:victor@localhost:5432/bkerss-db");
export const db = drizzle(queryClient);
