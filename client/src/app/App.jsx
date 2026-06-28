import { useEffect } from "react";
import { RouterProvider } from "react-router";
import { router } from "./providers/router/router";
import { useUserStore, getMe } from "@/entities/user";

function App() {
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    getMe()
      .then((user) => user && setUser(user))
      .catch(console.error);
  }, [setUser]);

  return <RouterProvider router={router} />;
}

export default App;
