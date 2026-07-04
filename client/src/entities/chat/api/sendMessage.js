export async function sendMessage(chatId, query, level) {
  const response = await fetch(`http://localhost:3000/chat/${chatId}/message`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      level,
    }),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error);
  }

  return result;
}
