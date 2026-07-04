export async function createChat() {
  const response = await fetch("http://localhost:3000/chat", {
    method: "POST",
    credentials: "include",
  });

  const result = await response.json();

  if (!response.ok) console.log(result.error);

  return result;
}
