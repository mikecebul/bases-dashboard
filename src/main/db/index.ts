import Database from 'better-sqlite3'

import { Database as DatabaseType } from 'better-sqlite3'

const dbPath = './src/main/db/sqlite.db'
export const db: DatabaseType = new Database(dbPath)

db.exec(`
CREATE TABLE IF NOT EXISTS client (
    id TEXT PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    counselor TEXT NOT NULL,
    attendance TEXT NOT NULL,
    email TEXT NOT NULL,
    active TEXT NOT NULL
);
`)
