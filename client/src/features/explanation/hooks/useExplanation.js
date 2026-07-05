import { useState } from "react";

import {
  useChatStore,
  createChat,
  sendMessage,
  renameChat,
} from "@/entities/chat";

export function useExplanation() {
  const [query, setQuery] = useState("");
  const [assistantMessage, setAssistantMessage] = useState(null);
  const [level, setLevel] = useState("eli5");
  const [loading, setLoading] = useState(false);

  const addChat = useChatStore((state) => state.addChat);
  const changeChatName = useChatStore((state) => state.changeChatName);
  const setActiveChat = useChatStore((state) => state.setActiveChat);
  let chatId = useChatStore((state) => state.activeChatId);

  const handleExplain = async (q) => {
    setQuery(q);
    setLoading(true);

    if (!chatId) {
      const chat = await createChat();
      addChat(chat);
      setActiveChat(chat.id);

      chatId = chat.id;
    }

    try {
      const data = await sendMessage(chatId, q, level);
      setAssistantMessage(data.content);
      await renameChat(chatId, data.content.title);
      changeChatName(chatId, data.content.title);
    } finally {
      setLoading(false);
    }
  };

  return {
    query,
    assistantMessage,
    level,
    loading,
    setLevel,
    handleExplain,
  };
}
