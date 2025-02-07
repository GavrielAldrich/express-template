import { Router } from "express";
import userController from "../controller/user.controller.js";
import ratelimiter from "../middlewares/limiter.js";

const router = Router();

router.post("/register", ratelimiter(1), userController.register);
// More controller here such as login, logout, userprofile, etc.

export default router;
