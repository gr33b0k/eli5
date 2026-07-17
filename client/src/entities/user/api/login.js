import { api, request } from "@/shared/lib";

export function login(data) {
  return request(api.auth.login, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}
