import { useEffect } from "react";
import { RouterProvider } from "react-router";
import { router } from "./providers/router/router";
import { useUserStore, getMe } from "@/entities/user";
import { useChatStore, getChats } from "@/entities/chat";

function App() {
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  const setChats = useChatStore((state) => state.setChats);

  useEffect(() => {
    async function init() {
      try {
        const user = await getMe();

        if (user) {
          setUser(user);

          const chats = await getChats(user.id);

          if (chats) {
            setChats(chats);
          }
        }
      } catch (e) {
        console.error(e);
      }
    }

    init();
  }, [setUser, setChats]);

  return <RouterProvider router={router} />;
}

export default App;
