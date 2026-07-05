export async function renameChat(chatId, newTitle) {
  const response = await fetch(`http://localhost:3000/chat/${chatId}/rename`, {
    method: "PATCH",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      newTitle,
    }),
  });

  if (!response.ok) {
    const result = await response.json();
    console.error(result.error);
  }
}
