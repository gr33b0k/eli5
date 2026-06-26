import { Header } from "@/widgets/header";
import Background from "@/shared/ui/background/ui/Background";
import AuthCard from "@/features/auth/ui/AuthCard";

function Auth() {
  return (
    <Background className="flex h-screen flex-col overflow-hidden p-4">
      <Header animate={false} />
      <div className="flex h-full items-center justify-center">
        <AuthCard />
      </div>
    </Background>
  );
}

export default Auth;
