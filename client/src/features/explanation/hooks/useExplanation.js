import { useState, useEffect } from "react";

import {
  useChatStore,
  createChat,
  getChat,
  sendMessage,
  renameChat,
} from "@/entities/chat";
import { ApiError } from "@/shared/lib";

export function useExplanation() {
  const [level, setLevel] = useState("eli5");

  const addChat = useChatStore((state) => state.addChat);

  const markDeleted = useChatStore((state) => state.markDeleted);

  const getChatById = useChatStore((state) => state.getChatById);

  const addMessage = useChatStore((state) => state.addMessage);

  const updateMessage = useChatStore((state) => state.updateMessage);

  const setGenerating = useChatStore((state) => state.setGenerating);

  const setActiveChat = useChatStore((state) => state.setActiveChat);

  const setChatMessages = useChatStore((state) => state.setChatMessages);

  const changeChatName = useChatStore((state) => state.changeChatName);

  const activeChatId = useChatStore((state) => state.activeChatId);

  useEffect(() => {
    if (!activeChatId) return;

    const chat = getChatById(activeChatId);

    if (!chat || chat.messages.length > 0) return;

    async function loadMessages() {
      const data = await getChat(activeChatId);

      if (!data) return;

      setChatMessages(
        activeChatId,
        data.messages.map((message) => ({
          ...message,
          content:
            message.role === "ASSISTANT"
              ? JSON.parse(message.content)
              : message.content,
        })),
      );
    }

    loadMessages();
  }, [activeChatId]);

  async function handleExplain(query) {
    let chatId = activeChatId;

    setGenerating(true);

    if (!chatId) {
      const chat = await createChat();

      addChat(chat);

      setActiveChat(chat.id);
      chatId = chat.id;
    }

    addMessage(chatId, {
      id: crypto.randomUUID(),
      role: "USER",
      content: query,
    });

    const loadingId = crypto.randomUUID();

    addMessage(chatId, {
      id: loadingId,
      role: "ASSISTANT",
      loading: true,
      content: null,
    });

    try {
      const data = await sendMessage(chatId, query, level);

      updateMessage(chatId, loadingId, {
        loading: false,
        content: data.content,
      });

      const chat = getChatById(chatId);

      if (chat?.title === "New chat") {
        changeChatName(chatId, data.content.title);
        await renameChat(chatId, data.content.title);
      }
    } catch (error) {
      const isApiError = error instanceof ApiError;
      if (isApiError && error.meta.chatDeleted) {
        markDeleted(chatId);
      }
      const message = isApiError ? error.message : "Something went wrong";
      const code = isApiError ? error.code : undefined;

      updateMessage(chatId, loadingId, {
        loading: false,
        error: true,
        content: {
          title: "Error",
          sections: [
            {
              type: code || "Error",
              content: message,
            },
          ],
        },
      });
    } finally {
      setGenerating(false);
    }
  }

  return {
    level,
    setLevel,
    handleExplain,
  };
}
