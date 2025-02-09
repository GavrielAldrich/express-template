import { createClient } from "redis";
import { RedisStore } from "connect-redis";
import session from "express-session";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.REDIS_URL || !process.env.SESSION_SECRET) {
  throw new Error("Missing necessary environment variables: REDIS_URL or SESSION_SECRET");
}

let redisClient;

(async () => {
  try {
    redisClient = createClient({
      url: process.env.REDIS_URL,
      database: 0,
    });

    redisClient.on("error", (error) => console.error(`Redis Client Error: ${error}`));

    await redisClient.connect();
    console.log("Connected to Redis");
  } catch (error) {
    console.error(`Failed to connect to Redis: ${error}`);
    process.exit(1); // Exit the process with failure
  }
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

process.on("SIGINT", async () => {
  if (redisClient) {
    await redisClient.quit();
    console.log("Redis client disconnected");
  }
  process.exit(0);
});

export default redisClient;
export { redisSession };