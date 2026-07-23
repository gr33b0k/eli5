import { motion } from "motion/react";

function Skeleton() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="glass-10 flex h-full flex-1 flex-col gap-4 rounded-4xl p-5"
    >
      <div className="flex items-center justify-between">
        <div className="h-7 w-64 animate-pulse rounded-lg bg-slate-200" />
        <div className="flex items-center gap-2">
          <div className="glass h-10 w-10 rounded-2xl" />
        </div>
      </div>
      <div className="glass flex h-full flex-col rounded-3xl">
        {[1, 2, 3].map((i, item) => (
          <div
            key={item}
            className="border-border flex flex-1 flex-col justify-center gap-2 border-b p-4 last:border-none"
          >
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-lg bg-slate-200" />
              <div className="h-4 w-30 animate-pulse rounded-lg bg-slate-200" />
            </div>
            <div className="flex flex-1 animate-pulse flex-col space-y-2">
              <div className="h-4 w-full rounded-lg bg-slate-200" />
              <div className="h-4 w-2/3 rounded-lg bg-slate-200" />
              <div className="h-4 w-5/6 rounded-lg bg-slate-200" />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Skeleton;
