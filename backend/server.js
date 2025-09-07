import express from "express";
import mysql from "mysql2/promise";
const app = express();
const pool = await mysql.createPool({
  host: process.env.DB_HOST || "db",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "changeme",
  database: process.env.DB_NAME || "appdb"
});
app.get("/api/health", async (_req, res) => {
  try {
    const [rows] = await pool.query("SELECT NOW() AS now");
    res.json({ ok: true, db_time: rows[0].now });
  } catch (e) {
    res.status(500).json({ ok: false, error: e.message });
  }
});
app.listen(3001, () => console.log("API on 3001"));
