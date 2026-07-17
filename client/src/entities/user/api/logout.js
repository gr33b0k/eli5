import { api, request } from "@/shared/lib";

export async function logout() {
  return request(api.auth.logout, {
    method: "POST",
  });
}
