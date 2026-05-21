import { AnimatePresence, motion } from "motion/react";

import Card from "./Card";
import InputBox from "./InputBox";
import LevelSelector from "./LevelSelector";

import { useExplanation } from "../hooks/useExplanation";
import { TOPICS } from "../lib/constants";

function Explanation() {
  const { query, response, level, loading, setLevel, handleExplain } =
    useExplanation();

  const hasQuery = !!query;

  return (
    <>
      <AnimatePresence>
        {!hasQuery && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.3 }}
              className="text-text font-syne text-center text-4xl font-bold"
            >
              Understand{" "}
              <span className="from-primary-active to-primary relative bg-linear-to-r bg-clip-text text-transparent italic">
                anything
              </span>{" "}
              at your level
            </motion.h2>

            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.3 }}
              className="text-text flex flex-wrap justify-center gap-2"
            >
              {TOPICS.map((topic) => (
                <li
                  key={topic}
                  onClick={() => handleExplain(topic)}
                  className="glass cursor-pointer rounded-4xl px-3 py-2"
                >
                  {topic}
                </li>
              ))}
            </motion.ul>

            <motion.div
              layoutId="input-shell"
              layout
              transition={{
                type: "spring",
                stiffness: 225,
                damping: 25,
              }}
              className="mx-auto w-full max-w-2xl"
            >
              <InputBox onSubmit={handleExplain} loading={loading} />
            </motion.div>

            <AnimatePresence>
              {!hasQuery && (
                <LevelSelector layout level={level} onChange={setLevel} />
              )}
            </AnimatePresence>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {hasQuery && (
          <>
            <Card loading={loading} content={response} />

            <motion.div
              layoutId="input-shell"
              layout
              className="glass rounded-4xl p-3"
            >
              <InputBox onSubmit={handleExplain} loading={loading} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Explanation;
