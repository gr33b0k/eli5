export async function getChat(chatId) {
  const response = await fetch(`http://localhost:3000/chat/${chatId}`, {
    method: "GET",
    credentials: "include",
  });

  const result = await response.json();

  if (!response.ok) console.log(result.error);

  return result;
}
