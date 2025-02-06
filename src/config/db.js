import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error("Error while connecting to MYSQL", err);
    process.exit(1);
  }
  console.log("Connected to MYSQL");
  connection.release();
});

export default pool;
