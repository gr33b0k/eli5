import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import ContentCard from "../components/explanation/ContentCard";
import ExplanationInput from "../components/explanation/ExplanationInput";
import LevelSelector from "../components/explanation/LevelSelector";

const topics = [
  "Quantum Mechanics",
  "Blockchain",
  "Photosynthesis",
  "The Roman Empire",
];

function Home() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState(null);
  const [level, setLevel] = useState("eli5");
  const [loading, setLoading] = useState(false);

  const handleExplain = async (q) => {
    setQuery(q);
    setLoading(true);

    const result = await fetch("http://localhost:3000/api/explain", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: q, level }),
    });

    const data = await result.json();

    setResponse(data);
    setLoading(false);
  };

  const hasQuery = !!query;

  return (
    <>
      <AnimatePresence>
        {!hasQuery && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{
                opacity: 0,
                y: -40,
              }}
              transition={{ duration: 0.3 }}
              className="text-text text-center text-4xl font-bold"
            >
              Understand{" "}
              <span className="from-primary-active to-primary relative inline-block bg-linear-to-r bg-clip-text text-transparent italic">
                anything
              </span>{" "}
              at your level
            </motion.h2>

            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{
                opacity: 0,
                y: -40,
              }}
              transition={{ duration: 0.3 }}
              className="text-text flex flex-wrap justify-center gap-2"
            >
              {topics.map((topic) => (
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
              <ExplanationInput onSubmit={handleExplain} loading={loading} />
            </motion.div>

            <AnimatePresence>
              {!hasQuery && (
                <LevelSelector
                  layout
                  level={level}
                  onChange={(level) => setLevel(level)}
                />
              )}
            </AnimatePresence>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {hasQuery && (
          <>
            <ContentCard loading={loading} content={response} />
            <motion.div
              layoutId="input-shell"
              layout
              className="glass rounded-4xl p-3"
            >
              <ExplanationInput onSubmit={handleExplain} loading={loading} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Home;
