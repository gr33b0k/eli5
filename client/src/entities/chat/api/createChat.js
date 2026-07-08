import { api } from "../../../shared/lib/api.js";

export async function createChat() {
  const response = await fetch(api.chat.root, {
    method: "POST",
    credentials: "include",
  });

  const result = await response.json();

  if (!response.ok) console.log(result.error);

  return result;
}
