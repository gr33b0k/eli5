import Sidebar from "./sidebar/Sidebar";

function MainLayout({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden text-slate-900 dark:text-slate-100">
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-blue-100 to-purple-100 dark:from-slate-950 dark:via-indigo-950 dark:to-slate-800" />
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-20 h-100 w-100 rounded-full bg-indigo-400/30 blur-3xl dark:bg-indigo-700/30" />
        <div className="absolute -right-30 -bottom-30 h-125 w-125 rounded-full bg-blue-400/30 blur-3xl dark:bg-blue-700/30" />
      </div>

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
