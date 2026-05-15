function Skeleton() {
  return (
    <>
      <div className="flex animate-pulse items-center justify-between">
        <div className="h-7 w-64 rounded-lg bg-slate-300/40" />
        <div className="flex items-center gap-2">
          <div className="glass h-10 w-10 rounded-2xl" />
          <div className="glass h-10 w-10 rounded-2xl" />
        </div>
      </div>
      <div className="glass flex h-full animate-pulse flex-col rounded-3xl">
        {[1, 2, 3].map((i, item) => (
          <div
            key={item}
            className="border-border flex flex-1 flex-col justify-center gap-2 border-b p-4 last:border-none"
          >
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-lg bg-slate-200/40" />
              <div className="h-4 w-30 rounded-lg bg-slate-200/40" />
            </div>
            <div className="flex flex-1 flex-col gap-3">
              <div className="space-y-2">
                <div className="h-4 w-full rounded-lg bg-slate-200/40" />
                <div className="h-4 w-2/3 rounded-lg bg-slate-200/40" />
                <div className="h-4 w-5/6 rounded-lg bg-slate-200/40" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex animate-pulse gap-4">
        <div className="glass h-10 w-36 rounded-2xl" />
        <div className="glass h-10 w-40 rounded-2xl" />
        <div className="glass h-10 w-44 rounded-2xl" />
        <div className="glass h-10 w-40 rounded-2xl" />
      </div>
    </>
  );
}

export default Skeleton;
