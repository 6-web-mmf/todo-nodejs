import sqlite3 from 'sqlite3'

const sqlite = sqlite3.verbose()

export const db = new sqlite.Database("../dev.db")