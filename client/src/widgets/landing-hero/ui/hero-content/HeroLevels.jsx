import {
  BabyIcon,
  FlaskIcon,
  RocketLaunchIcon,
  SlidersHorizontalIcon,
} from "@phosphor-icons/react";
import { useState } from "react";
import { motion } from "motion/react";

import HeroLevel from "./HeroLevel";

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

const container = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.45,
      delay: 0.45,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

function HeroLevels() {
  const [activeLevel, setActiveLevel] = useState("eli5");

  return (
    <motion.div
      variants={container}
      className="glass-20 w-full rounded-4xl p-4"
    >
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
    </motion.div>
  );
}

export default HeroLevels;
