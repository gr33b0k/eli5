import { useUserStore } from "../../../entities/user";
import ChatList from "./ChatList";
import UserCard from "./UserCard";
import { logout } from "@/entities/user";
import { Logo } from "@/shared/ui";

function Sidebar() {
  const user = useUserStore((state) => state.user);
  const clearUser = useUserStore((state) => state.clearUser);

  console.log(user);

  async function handleLogout() {
    await logout();
    clearUser();
  }

  return (
    <aside className="flex h-full w-80 flex-col gap-4">
      <div className="glass-40 rounded-4xl px-7 py-4">
        <Logo />
      </div>

      <div className="glass-40 flex flex-1 flex-col gap-3 overflow-hidden rounded-4xl py-4 pb-7">
        <button className="btn-primary mx-4">+ New Chat</button>
        <ChatList
          chats={[
            { id: 1, title: "Chat-1", isActive: false },
            { id: 2, title: "Chat-2", isActive: true },
            { id: 3, title: "Chat-3", isActive: false },
            { id: 4, title: "Chat-3", isActive: false },
            { id: 5, title: "Chat-3", isActive: false },
            { id: 6, title: "Chat-3", isActive: false },
            { id: 7, title: "Chat-3", isActive: false },
            { id: 8, title: "Chat-3", isActive: false },
            { id: 9, title: "Chat-3", isActive: false },
            { id: 10, title: "Chat-3", isActive: false },
            { id: 33, title: "Chat-3", isActive: false },
            { id: 34, title: "Chat-3", isActive: false },
            { id: 35, title: "Chat-3", isActive: false },
            { id: 36, title: "Chat-3", isActive: false },
            { id: 37, title: "Chat-3", isActive: false },
            { id: 38, title: "Chat-3", isActive: false },
            { id: 31, title: "Chat-3", isActive: false },
            { id: 32, title: "Chat-3", isActive: false },
            { id: 53, title: "Chat-3", isActive: false },
            { id: 423, title: "Chat-3", isActive: false },
            { id: 3242, title: "Chat-3", isActive: false },
            { id: 423423, title: "Chat-3", isActive: false },
            { id: 442543423, title: "Chat-3", isActive: false },
            { id: 4351535, title: "Chat-3", isActive: false },
          ]}
        />
      </div>
      {user && <UserCard user={user} onLogout={handleLogout} />}
    </aside>
  );
}

export default Sidebar;
