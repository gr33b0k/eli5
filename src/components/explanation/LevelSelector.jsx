import { useState } from "react";

const LEVELS = [
  { id: "eli5", label: "ELI5", description: "Like I'm 5" },
  { id: "beginner", label: "Beginner", description: "I'm just starting" },
  { id: "expert", label: "Expert", description: "I know the basics" },
];

function LevelSelector() {
  const [level, setLevel] = useState("eli5");

  return (
    <div className="glass relative flex self-center rounded-4xl p-1">
      <span
        className="bg-accent shadow-primary/50 shadow-even absolute top-1 bottom-1 rounded-4xl p-2 transition-transform duration-300 ease-in-out"
        style={{
          width: `calc((100% - 8px) / ${LEVELS.length}`,
          transform: `translateX(${LEVELS.findIndex((l) => l.id === level) * 100}%)`,
        }}
      />
      {LEVELS.map((l) => (
        <button
          key={l.id}
          className={
            "z-10 min-w-35 rounded-4xl p-2 transition-colors duration-300 ease-in-out " +
            (l.id === level ? "text-surface" : "text-text-muted")
          }
          onClick={() => l.id !== level && setLevel(l.id)}
        >
          <span className="block text-sm leading-tight font-semibold">
            {l.label}
          </span>
          <span className="block text-xs leading-tight opacity-80">
            {l.description}
          </span>
        </button>
      ))}
    </div>
  );
}

export default LevelSelector;
