import { useState, useEffect } from "react";

import {
  useChatStore,
  createChat,
  getChat,
  sendMessage,
  renameChat,
} from "@/entities/chat";

export function useExplanation() {
  const [level, setLevel] = useState("eli5");

  const addChat = useChatStore((state) => state.addChat);

  const addMessage = useChatStore((state) => state.addMessage);

  const updateMessage = useChatStore((state) => state.updateMessage);

  const setActiveChat = useChatStore((state) => state.setActiveChat);

  const setChatMessages = useChatStore((state) => state.setChatMessages);

  const changeChatName = useChatStore((state) => state.changeChatName);

  const activeChatId = useChatStore((state) => state.activeChatId);

  useEffect(() => {
    if (!activeChatId) return;

    const chat = useChatStore
      .getState()
      .chats.find((chat) => chat.id === activeChatId);

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

    if (!chatId) {
      const chat = await createChat();

      addChat(chat);

      setActiveChat(chat.id);
      chatId = chat.id;
    }

    console.log(useChatStore.getState().chats);

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

    console.log(
      useChatStore.getState().chats.find((chat) => chat.id === chatId),
    );

    try {
      const data = await sendMessage(chatId, query, level);

      updateMessage(chatId, loadingId, {
        loading: false,
        content: data.content,
      });

      const chat = useChatStore
        .getState()
        .chats.find((chat) => chat.id === chatId);

      if (chat?.title === "New chat") {
        changeChatName(chatId, data.content.title);
        await renameChat(chatId, data.content.title);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return {
    level,
    setLevel,
    handleExplain,
  };
}
