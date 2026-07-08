import { api } from "../../../shared/lib/api.js";

export async function deleteChat(chatId) {
  const response = await fetch(api.chat.delete(chatId), {
    method: "DELETE",
    credentials: "include",
  });

  if (!response.ok) {
    const result = await response.json();
    console.error(result.error);
  }
}
