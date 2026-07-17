import { api, request } from "@/shared/lib";

export function getChat(chatId) {
  return request(api.chat.byId(chatId));
}
