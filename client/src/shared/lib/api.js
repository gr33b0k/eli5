const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export const api = {
  auth: {
    login: `${BASE_URL}/auth/login`,
    register: `${BASE_URL}/auth/register`,
    logout: `${BASE_URL}/auth/logout`,
    me: `${BASE_URL}/auth/me`,
  },
  chat: {
    root: `${BASE_URL}/chat`,
    byId: (chatId) => `${BASE_URL}/chat/${chatId}`,
    delete: (chatId) => `${BASE_URL}/chat/${chatId}/delete`,
    rename: (chatId) => `${BASE_URL}/chat/${chatId}/rename`,
    message: (chatId) => `${BASE_URL}/chat/${chatId}/message`,
  },
};

export const API_URL = BASE_URL;
