import { createBrowserRouter } from "react-router";

import { LandingPage } from "@/pages/landing";
import { AuthPage } from "../../../pages/auth";
import { ChatPage } from "@/pages/chat";

export const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/auth", element: <AuthPage /> },
  { path: "/chat", element: <ChatPage /> },
]);
