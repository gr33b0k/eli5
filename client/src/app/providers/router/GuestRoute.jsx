import { useUserStore } from "@/entities/user";
import { Navigate } from "react-router";

function GuestRoute({ children }) {
  const user = useUserStore((state) => state.user);

  if (user) {
    return <Navigate to="/chat" replace />;
  }
  return children;
}

export default GuestRoute;
