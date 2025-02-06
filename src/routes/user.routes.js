import { Router } from "express";
import userController from "../controller/user.controller.js";

const router = Router();

router.post("/register", userController.register);
// More route here such as login, logout, userprofile, etc.

export default router;
