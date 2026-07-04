import { Router } from "express";
import {
  createChat,
  getChats,
  getChat,
  sendMessage,
} from "./chat.controller.js";

import { authMiddleware } from "../auth/auth.middleware.js";

const router = Router();

router.post("/", authMiddleware, createChat);
router.get("/", authMiddleware, getChats);
router.get("/:id", authMiddleware, getChat);

router.post("/:id/message", authMiddleware, sendMessage);

export default router;
