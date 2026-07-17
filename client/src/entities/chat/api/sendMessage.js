import { api, request } from "@/shared/lib";

export function sendMessage(chatId, query, level) {
  return request(api.chat.message(chatId), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      level,
    }),
  });
}
