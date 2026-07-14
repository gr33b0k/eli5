import { useUserStore } from "@/entities/user";
import { LoadingScreen } from "@/shared/ui/loading-screen";
import { Navigate } from "react-router";

function GuestRoute({ children }) {
  const user = useUserStore((state) => state.user);
  const initialized = useUserStore((state) => state.initialized);

  if (!initialized) {
    return <LoadingScreen />;
  }

  if (user) {
    return <Navigate to="/chat" replace />;
  }
  return children;
}

export default GuestRoute;
