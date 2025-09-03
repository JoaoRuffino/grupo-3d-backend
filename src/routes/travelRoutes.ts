import { Router } from "express";
import { validateData } from "../middleware/validationMiddleware";
import { travelCreationSchema } from "../schemas/travelSchemas";
import { createTravel, updateTravel } from "../controllers/travelController";
import { authMiddleware } from "../middleware/authMiddleware";
const router = Router();
router.post("/create", authMiddleware, validateData(travelCreationSchema), createTravel)
router.post("/update", authMiddleware, validateData(travelCreationSchema), updateTravel)

export default router