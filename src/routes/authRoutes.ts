import { Router } from "express";
import { users } from "../models/user";
import type { User } from "../models/user.js";
import { register, login } from "../controllers/authController";

const router = Router();

router.post("/register", register);
router.post("/login", login)

export default router;
