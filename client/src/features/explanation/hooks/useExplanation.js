import { useState } from "react";

import { useChatStore, sendMessage } from "@/entities/chat";

export function useExplanation() {
  const [query, setQuery] = useState("");
  const [assistantMessage, setAssistantMessage] = useState(null);
  const [level, setLevel] = useState("eli5");
  const [loading, setLoading] = useState(false);

  const activeChatId = useChatStore((state) => state.activeChatId);

  const handleExplain = async (q) => {
    setQuery(q);
    setLoading(true);

    try {
      const data = await sendMessage(activeChatId, q, level);
      setAssistantMessage(data.content);
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
