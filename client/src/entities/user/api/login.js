import { api } from "@/shared/lib/api.js";

export async function login(data) {
  const response = await fetch(api.auth.login, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error);
  }

  return result;
}
