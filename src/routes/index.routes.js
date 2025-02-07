import { Router } from "express";
import userRoutes from "./user.routes.js";

const router = Router();

router.use("/users", userRoutes);
// More route here such as cart, orders, etc

export default router;