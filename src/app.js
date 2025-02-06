import express from "express";
import router from "./routes/index.routes.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/v1", router);

app.listen(process.env.PORT, () => {
  console.log("Server is running on port", PORT);
});
