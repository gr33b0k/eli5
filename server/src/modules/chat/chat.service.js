import { prisma } from "../../lib/prisma.js";
import { getSystemPrompt } from "./chat.prompts.js";

export async function createChat(userId) {
  const result = await prisma.chat.create({
    data: { title: "New chat", userId },
  });

  return result;
}

export async function getChats(userId) {
  const result = await prisma.chat.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      title: true,
      createdAt: true,
    },
  });

  return result;
}

export async function getChat(chatId, userId) {
  const result = await prisma.chat.findFirst({
    where: {
      id: chatId,
      userId,
    },
    select: {
      id: true,
      title: true,
      messages: {
        orderBy: {
          createdAt: "asc",
        },
      },
    },
  });

  return result;
}

export async function deleteChat(chatId, userId) {
  const chat = await prisma.chat.findFirst({
    where: {
      id: chatId,
      userId,
    },
  });

  if (!chat) {
    throw new Error("Chat not found");
  }

  await prisma.chat.delete({
    where: {
      id: chatId,
    },
  });
}

export async function renameChat(chatId, userId, newTitle) {
  const chat = await prisma.chat.findFirst({
    where: {
      id: chatId,
      userId,
    },
  });

  if (!chat) {
    throw new Error("Chat not found");
  }

  await prisma.chat.update({
    where: {
      id: chatId,
    },
    data: {
      title: newTitle,
    },
  });
}

export async function sendMessage(chatId, userId, query, level) {
  const chat = await prisma.chat.findFirst({
    where: {
      id: chatId,
      userId,
    },
  });

  if (!chat) throw new Error("Chat not found");

  await prisma.message.create({
    data: {
      role: "USER",
      chatId,
      content: query,
    },
  });

  const API_KEY = process.env.OPENROUTER_API_KEY;

  const messages = [
    {
      role: "system",
      content: getSystemPrompt(level),
    },
    {
      role: "user",
      content: query,
    },
  ];

  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "nvidia/nemotron-3-ultra-550b-a55b:free",
        messages,
        temperature: 0.7,
      }),
    },
  );

  if (!response.ok) {
    throw new Error("OpenRouter request failed");
  }

  const data = await response.json();

  const answer = data.choices[0].message.content;

  if (!answer) throw new Error("AI error");

  let parsed;

  try {
    parsed = JSON.parse(answer);
  } catch {
    throw new Error("Model returned invalid JSON");
  }

  const assistant = await prisma.message.create({
    data: {
      role: "ASSISTANT",
      content: JSON.stringify(parsed),
      chatId,
    },
    select: {
      id: true,
      role: true,
      content: true,
      createdAt: true,
    },
  });

  return { ...assistant, content: parsed };
}
