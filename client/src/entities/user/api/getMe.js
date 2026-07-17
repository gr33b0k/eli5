import { api, request } from "@/shared/lib";

export async function getMe() {
  try {
    return await request(api.auth.me);
  } catch (error) {
    if (error.status === 401) {
      return null;
    }

    throw error;
  }
}
