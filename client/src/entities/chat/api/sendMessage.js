import { api } from "@/shared/lib/api.js";

export async function sendMessage(chatId, query, level) {
  const response = await fetch(api.chat.message(chatId), {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      level,
    }),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error);
  }

  return result;
}
