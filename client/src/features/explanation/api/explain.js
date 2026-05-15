export async function explain(query, level) {
  const response = await fetch("http://localhost:3000/explain", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      level,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch explanation");
  }

  return response.json();
}
