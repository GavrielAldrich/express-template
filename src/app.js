import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";

import redisSession from "./config/redisSession.js";
import router from "./routes/index.routes.js";
import errorMiddleware from "./middlewares/error.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(errorMiddleware);
app.use(redisSession)

app.use("/api/v1", router);

app.listen(process.env.PORT, () => {
  console.log("Server is running on port", process.env.PORT);
});
