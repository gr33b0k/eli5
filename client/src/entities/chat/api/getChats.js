import { api, request } from "@/shared/lib";

export function getChats() {
  return request(api.chat.root);
}
