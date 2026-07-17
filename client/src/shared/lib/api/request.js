import { ApiError } from "./ApiError";

export async function request(url, options = {}) {
  let response;

  try {
    response = await fetch(url, {
      credentials: "include",
      ...options,
    });
  } catch {
    throw new ApiError(0, "NETWORK_ERROR", "Network error");
  }

  let result = null;

  try {
    result = await response.json();
  } catch {}

  if (!response.ok) {
    throw new ApiError(
      response.status,
      result?.code ?? "UNKNOWN_ERROR",
      result?.error ?? response.statusText,
    );
  }

  return result;
}
