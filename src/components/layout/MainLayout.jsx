import Sidebar from "./sidebar/Sidebar";

function MainLayout({ children }) {
  return (
    <div className="bg-gradient relative flex h-screen overflow-hidden p-8">
      <Sidebar />
      <main className="flex flex-1 flex-col gap-4 pl-8">{children}</main>
    </div>
  );
}

export default MainLayout;
