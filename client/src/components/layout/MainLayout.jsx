import Sidebar from "./sidebar/Sidebar";

function MainLayout({ children }) {
  return (
    <div className="bg-gradient relative flex h-screen overflow-hidden p-4">
      <Sidebar />
      <main className="relative ml-4 flex h-full flex-1 flex-col gap-4 overflow-hidden rounded-4xl">
        {children}
      </main>
    </div>
  );
}

export default MainLayout;
