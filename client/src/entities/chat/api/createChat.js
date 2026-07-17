import { api, request } from "@/shared/lib";

export function createChat() {
  return request(api.chat.root, { method: "POST" });
}
