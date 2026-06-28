import { RouterProvider } from "react-router";
import { router } from "./providers/router/router";
import { useUserStore } from "@/entities/user";

function App() {
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);

  return <RouterProvider router={router} />;
}

export default App;
