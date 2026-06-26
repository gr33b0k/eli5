import { Router } from "express";
import {
  meController,
  registerController,
  loginController,
} from "./auth.controller.js";
import { authMiddleware } from "./auth.middleware.js";

const router = Router();

router.get("/me", authMiddleware, meController);
router.post("/register", registerController);
router.post("/login", loginController);

export default router;
