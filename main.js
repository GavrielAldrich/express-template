import express from "express";

import limiter from "./utils/limiter.js";
import pool from "./config/db.js";

const db = pool;
const app = express();

app.get("/", async (req, res) => {
  const query = "SELECT * FROM `users`";
  const remainingRequest = await limiter.removeTokens(0.5);
  console.log(remainingRequest)
  if (remainingRequest < 0) {
    console.log('Too much request', remainingRequest)
    res.status(429).end("429 Too many Requests - your IP is being rate limited");
    return
  }
  try {
    db.query(query, (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
        return err;
      }
      res.status(200).send({ message: "Success retrieving users data" });
    });
  } catch (error) {
    console.log(error);
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
