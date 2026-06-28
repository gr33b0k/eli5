import { useUserStore } from "@/entities/user";
import { Navigate } from "react-router";

function ProtectedRoute({ children }) {
  const user = useUserStore((state) => state.user);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
