import { api } from "../../../shared/lib/api.js";

export async function logout() {
  await fetch(api.auth.logout, {
    method: "POST",
    credentials: "include",
  });
}
