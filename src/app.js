import express from "express";
import router from "./routes/index.routes.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/v1", router);

app.listen(process.env.PORT, () => {
  console.log("Server is running on port", process.env.PORT);
});