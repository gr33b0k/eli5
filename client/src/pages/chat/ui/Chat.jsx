import { Sidebar } from "@/widgets/sidebar";
import { Explanation } from "@/features/explanation";
import { Background } from "@/shared/ui/background";

function Chat() {
  return (
    <Background className="relative flex h-screen overflow-hidden p-4">
      <Sidebar />
      <main className="relative ml-4 flex h-full flex-1 flex-col gap-4 overflow-hidden rounded-4xl">
        <Explanation />
      </main>
    </Background>
  );
}

export default Chat;
