import { Router } from "express";
import { users } from "../models/user";
import type { User } from "../models/user.js";
import { register } from "../controllers/authController";

const router = Router();

router.post("/register", register);

export default router;
