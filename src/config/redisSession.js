import { createClient } from "redis";
import { RedisStore } from "connect-redis";
import session from "express-session";

import dotenv from "dotenv";

dotenv.config();

const redisClient = createClient({
  host: "localhost",
  port: 6379,
});

redisClient.on("error", (err) => console.log("Redis Client Error", err));

const redisSession = session({
  store: new RedisStore({
    client: redisClient,
    prefix: "myapp:",
  }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
});

export default redisSession;
