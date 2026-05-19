import { BabyIcon, FlaskIcon, RocketLaunchIcon } from "@phosphor-icons/react";
import HeroLevel from "./HeroLevel";
import { SlidersHorizontalIcon } from "@phosphor-icons/react";
import LevelSelector from "../../../../features/explanation/ui/LevelSelector";
import { useState } from "react";

const LEVELS = [
  {
    id: "eli5",
    label: "ELI5",
    description: "Like I'm 5",
    icon: BabyIcon,
    active: true,
  },
  {
    id: "beginner",
    label: "Beginner",
    description: "Just starting",
    icon: RocketLaunchIcon,
  },
  {
    id: "expert",
    label: "Expert",
    description: "Go deep",
    icon: FlaskIcon,
  },
];

function HeroLevels() {
  const [activeLevel, setActiveLevel] = useState("eli5");

  return (
    <div className="glass-30 w-full rounded-4xl p-4">
      <h3 className="text-text mb-4 flex items-center gap-2 text-lg font-semibold">
        <SlidersHorizontalIcon size={24} className="" /> Choose your level:
      </h3>
      <div className="relative flex gap-2">
        {LEVELS.map((level) => {
          const Icon = level.icon;
          const isActiveLevel = activeLevel === level.id;
          return (
            <HeroLevel
              key={level.id}
              title={level.label}
              isActive={isActiveLevel}
              text={level.description}
              onClick={() => setActiveLevel(level.id)}
            >
              <Icon
                size={24}
                className={`transition-all ${isActiveLevel ? "text-white" : "text-accent"}`}
                weight="bold"
              />
            </HeroLevel>
          );
        })}
      </div>
    </div>
  );
}

export default HeroLevels;
