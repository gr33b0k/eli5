import { AppError } from "../../lib/AppError.js";
import * as chatService from "./chat.service.js";

function handleError(res, error) {
  if (error instanceof AppError) {
    return res.status(error.status).json({
      error: error.message,
      code: error.code,
      meta: error.meta,
    });
  }

  console.error(error);
  return res.status(500).json({ error: "Internal server error" });
}

export async function createChat(req, res) {
  try {
    const userId = req.user.userId;
    const result = await chatService.createChat(userId);
    res.status(201).json(result);
  } catch (error) {
    return handleError(res, error);
  }
}

export async function getChats(req, res) {
  try {
    const userId = req.user.userId;
    const result = await chatService.getChats(userId);
    res.status(200).json(result);
  } catch (error) {
    return handleError(res, error);
  }
}

export async function getChat(req, res) {
  try {
    const userId = req.user.userId;
    const chatId = req.params.id;
    const result = await chatService.getChat(chatId, userId);
    res.status(200).json(result);
  } catch (error) {
    return handleError(res, error);
  }
}

export async function deleteChat(req, res) {
  try {
    const userId = req.user.userId;
    const chatId = req.params.id;
    await chatService.deleteChat(chatId, userId);
    res.sendStatus(204);
  } catch (error) {
    return handleError(res, error);
  }
}

export async function renameChat(req, res) {
  try {
    const userId = req.user.userId;
    const chatId = req.params.id;
    const newTitle = req.body.newTitle;
    await chatService.renameChat(chatId, userId, newTitle);
    res.sendStatus(204);
  } catch (error) {
    return handleError(res, error);
  }
}

export async function sendMessage(req, res) {
  try {
    const userId = req.user.userId;
    const chatId = req.params.id;
    const { query, level } = req.body;
    const result = await chatService.sendMessage(chatId, userId, query, level);
    res.status(201).json(result);
  } catch (error) {
    return handleError(res, error);
  }
}
