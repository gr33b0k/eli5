import { useState } from "react";
import ContentCard from "../components/explanation/card/ContentCard";
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
  const [level, setLevel] = useState("eli5");

  return (
    <>
      {query ? (
        <>
          <ContentCard title={query} />
          <button className="btn-primary self-center">Explain Deeper</button>
        </>
      ) : (
        <>
          <div className="mx-auto flex h-full w-full max-w-2xl flex-col justify-center gap-8">
            <h2 className="text-text text-center text-4xl font-bold">
              Understand{" "}
              <span className="text-accent text-5xl font-medium italic">
                anything
              </span>{" "}
              at your level
            </h2>
            <div className="flex w-full flex-col justify-center gap-4">
              <ul className="text-text flex flex-wrap justify-center gap-2">
                {topics.map((topic) => (
                  <li
                    onClick={() => setQuery(topic)}
                    className="glass cursor-pointer rounded-4xl px-3 py-2"
                    key={topic}
                  >
                    {topic}
                  </li>
                ))}
              </ul>
              <ExplanationInput onSubmit={(value) => setQuery(value)} />
              <LevelSelector
                level={level}
                onChange={(level) => setLevel(level)}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Home;
