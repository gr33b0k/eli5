import { Router } from "express";
import { explain } from "../services/ai.service.js";

const router = Router();

router.post("/explain", explain);

export default router;
