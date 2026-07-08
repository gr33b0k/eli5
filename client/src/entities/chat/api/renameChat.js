import { api } from "@/shared/lib/api.js";

export async function renameChat(chatId, newTitle) {
  const response = await fetch(api.chat.rename(chatId), {
    method: "PATCH",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      newTitle,
    }),
  });

  if (!response.ok) {
    const result = await response.json();
    console.error(result.error);
  }
}
