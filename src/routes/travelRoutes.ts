import { Router } from "express";
import { validateData } from "../middleware/validationMiddleware";
import { travelCreationSchema, travelUpdateSchema } from "../schemas/travelSchemas";
import { createTravel, updateTravel } from "../controllers/travelController";
import { authMiddleware } from "../middleware/authMiddleware";
const router = Router();
router.post("/create", authMiddleware, validateData(travelCreationSchema), createTravel)
router.put("/update/:travelId", authMiddleware, validateData(travelUpdateSchema), updateTravel)

export default router