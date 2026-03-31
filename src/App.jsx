function App() {
  return (
    <div className="relative min-h-screen overflow-hidden text-slate-900 dark:text-slate-100">
      <div
        className="absolute inset-0 -z-10 bg-linear-to-br 
        from-blue-100 to-purple-100 
        dark:from-slate-950 dark:via-indigo-950 dark:to-slate-800"
      />
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-20 w-100 h-100 bg-indigo-400/30 dark:bg-indigo-700/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-30 -right-30 w-125 h-125 bg-blue-400/30 dark:bg-blue-700/30 rounded-full blur-3xl" />
      </div>

      <div className="flex h-screen">
        <span>App</span>
      </div>
    </div>
  );
}

export default App;
