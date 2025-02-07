import { createClient } from "redis";
import { RedisStore } from "connect-redis";
import session from "express-session";

import dotenv from "dotenv";

dotenv.config();
let redisClient;

(async () => {
  redisClient = createClient({
    url: process.env.REDIS_URL,
    database: 0,
  });

  redisClient.on("error", (error) => console.error(`Error : ${error}`));

  await redisClient.connect();
})();

const redisSession = session({
  store: new RedisStore({
    client: redisClient,
    prefix: "myapp:",
  }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: true }, // Set to true for HTTPS
});

export default redisClient;
export { redisSession };
