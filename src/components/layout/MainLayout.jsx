import Sidebar from "./sidebar/Sidebar";

function MainLayout({ children }) {
  return (
    <div className="bg-gradient relative flex h-screen overflow-hidden p-4">
      <Sidebar />
      <main className="flex flex-1 flex-col justify-center gap-4 pl-4">
        {children}
      </main>
    </div>
  );
}

export default MainLayout;
