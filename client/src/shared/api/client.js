const BASE_URL = "http://localhost:3000";

export async function api(path, options = {}) {
  const response = await fetch(`${BASE_URL}${path}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error("Request failed");
  }

  return response.json();
}
