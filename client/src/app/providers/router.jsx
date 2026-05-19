import { createBrowserRouter } from "react-router";

import { LandingPage } from "@/pages/landing";
import { ChatPage } from "@/pages/chat";

export const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/chat", element: <ChatPage /> },
]);
