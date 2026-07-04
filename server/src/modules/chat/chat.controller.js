import * as chatService from "./chat.service.js";

export async function createChat(req, res) {
  try {
    const userId = req.user.userId;
    const result = await chatService.createChat(userId);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to create chat" });
  }
}

export async function getChats(req, res) {
  try {
    const userId = req.user.userId;
    const result = await chatService.getChats(userId);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).error({ error: "Failed to get chats" });
  }
}

export async function getChat(req, res) {
  try {
    const userId = req.user.userId;
    const chatId = req.params.id;
    const result = await chatService.getChat(chatId, userId);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to get chat" });
  }
}

export async function deleteChat(req, res) {
  try {
    const userId = req.user.userId;
    const chatId = req.params.id;
    await chatService.deleteChat(chatId, userId);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete chat" });
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
    res.status(500).json({ error: "Failed to send message" });
  }
}
