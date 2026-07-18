import { Header } from "@/widgets/header";
import Background from "@/shared/ui/background/ui/Background";
import AuthCard from "@/features/auth/ui/AuthCard";

function Auth() {
  return (
    <Background className="flex min-h-screen flex-col justify-center overflow-hidden p-4">
      <Header animate={false} />
      <div className="flex min-h-[calc(100vh-96px)] items-center justify-center py-8">
        <AuthCard />
      </div>
    </Background>
  );
}

export default Auth;
