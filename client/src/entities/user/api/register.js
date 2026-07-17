import { api, request } from "@/shared/lib";

export function register(data) {
  return request(api.auth.register, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}
