import { api, request } from "@/shared/lib";

export function renameChat(chatId, newTitle) {
  return request(api.chat.rename(chatId), {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      newTitle,
    }),
  });
}
