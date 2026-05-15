import { Router } from "express";
import { explain } from "./ai.service.js";

const router = Router();

router.post("/explain", explain);

export default router;
