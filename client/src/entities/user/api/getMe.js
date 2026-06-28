export async function getMe() {
  const response = await fetch("http://localhost:3000/auth/me", {
    credentials: "include",
  });

  if (response.status === 401) return null;

  if (!response.ok) throw new Error("Server error");

  return response.json();
}
