import { api, request } from "@/shared/lib";

export function deleteChat(chatId) {
  return request(api.chat.delete(chatId), { method: "DELETE" });
}
