export async function login(data) {
  const response = await fetch("http://localhost:3000/auth/login", {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error);
  }

  return result;
}

export async function logout() {
  await fetch("http://localhost:3000/auth/logout", {
    method: "POST",
    credentials: "include",
  });
}

export async function register(data) {
  const response = await fetch("http://localhost:3000/auth/register", {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error);
  }

  return result;
}
