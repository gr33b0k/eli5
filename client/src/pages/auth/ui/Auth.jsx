import { Header } from "@/widgets/header";
import Background from "@/shared/ui/background/ui/Background";
import AuthCard from "@/features/auth/ui/AuthCard";

function Auth() {
  return (
    <Background className="flex h-screen flex-col overflow-hidden p-4">
      <Header />
      <AuthCard />
    </Background>
  );
}

export default Auth;
