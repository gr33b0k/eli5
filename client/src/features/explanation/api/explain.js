import { api } from "@/shared/api";

export async function explain(query, level) {
  return api("/explain", {
    method: "POST",
    body: JSON.stringify({
      query,
      level,
    }),
  });
}
