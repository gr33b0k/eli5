import { Router } from "express";
import {
  createChat,
  getChats,
  getChat,
  deleteChat,
  renameChat,
  sendMessage,
} from "./chat.controller.js";

import { authMiddleware } from "../auth/auth.middleware.js";

const router = Router();

router.post("/", authMiddleware, createChat);
router.get("/", authMiddleware, getChats);
router.get("/:id", authMiddleware, getChat);
router.delete("/:id/delete", authMiddleware, deleteChat);
router.patch("/:id/rename", authMiddleware, renameChat);

router.post("/:id/message", authMiddleware, sendMessage);

export default router;
