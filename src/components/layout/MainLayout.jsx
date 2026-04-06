import Sidebar from "./sidebar/Sidebar";

function MainLayout({ children }) {
  return (
    <div className="bg-gradient relative min-h-screen overflow-hidden">
      <div className="flex h-screen">
        <Sidebar />
        <main className="flex flex-1 flex-col gap-4 px-34 py-20">
          {children}
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
