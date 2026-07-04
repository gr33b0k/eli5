export async function deleteChat(chatId) {
  const response = await fetch(`http://localhost:3000/chat/${chatId}/delete`, {
    method: "DELETE",
    credentials: "include",
  });

  if (!response.ok) {
    const result = await response.json();
    console.error(result.error);
  }
}
