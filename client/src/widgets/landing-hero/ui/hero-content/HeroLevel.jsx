import { motion } from "motion/react";

const item = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.25,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function HeroLevel({ title, text, isActive, onClick, children }) {
  return (
    <motion.button
      variants={item}
      onClick={onClick}
      className={`flex w-full cursor-pointer items-center gap-3 rounded-3xl p-4 pr-7 transition-colors md:w-1/3 ${
        isActive
          ? "glass inset-shadow-accent bg-primary"
          : "glass-5 hover:glass-20"
      } `}
    >
      <div
        className={`glass bg-primary/10 aspect-square h-fit rounded-full p-3 transition-all ${isActive ? "inset-shadow-accent" : ""}`}
      >
        {children}
      </div>

      <div className="flex flex-col justify-center text-left">
        <h3
          className={`text-lg leading-tight font-semibold transition-all ${isActive ? "text-white" : "text-accent"}`}
        >
          {title}
        </h3>

        <span
          className={`hidden text-xs leading-tight transition-all md:inline ${isActive ? "text-white/80" : "text-text-muted"}`}
        >
          {text}
        </span>
      </div>
    </motion.button>
  );
}

export default HeroLevel;
