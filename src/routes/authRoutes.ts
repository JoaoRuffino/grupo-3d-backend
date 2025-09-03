import { Router } from "express";
import { validateData } from "../middleware/validationMiddleware";
import { userRegistrationSchema, userLoginSchema } from "../schemas/userSchemas";
import { register, login } from "../controllers/authController";

const router = Router();

router.post("/register", validateData(userRegistrationSchema), register);
router.post("/login", validateData(userLoginSchema), login)

export default router;
