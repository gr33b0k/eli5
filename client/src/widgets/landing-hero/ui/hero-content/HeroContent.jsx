import { motion } from "motion/react";
import { useNavigate } from "react-router";

import HeroLevels from "./HeroLevels";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const slideDown = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function HeroContent() {
  const navigate = useNavigate();

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="relative z-10 flex w-full max-w-full flex-col gap-4"
    >
      <motion.div
        variants={slideDown}
        className="glass mb-2 hidden w-fit items-center gap-2 rounded-full px-5 py-2 sm:flex"
      >
        <div className="bg-accent h-2 w-2 animate-pulse rounded-full" />

        <span className="text-text-muted text-sm font-medium">
          Smart explanations for every mind
        </span>
      </motion.div>

      <motion.h1
        variants={slideDown}
        className="font-syne text-text xs:text-4xl text-3xl leading-tight font-black sm:text-5xl md:text-6xl"
      >
        Understand{" "}
        <span className="from-primary-active to-primary bg-linear-to-r bg-clip-text text-transparent italic">
          anything
        </span>{" "}
        <br />
        at your level
      </motion.h1>

      <motion.p
        variants={slideDown}
        className="text-text-muted text-base leading-relaxed sm:text-lg"
      >
        ELI5 breaks down complex topics into beautifully simple explanations
        tailored to how you think and learn.
      </motion.p>

      <HeroLevels />

      <motion.button
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          delay: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        onClick={() => navigate("/auth")}
        className="btn-primary mt-2 rounded-full px-6 py-3"
      >
        Start for free →
      </motion.button>
    </motion.div>
  );
}

export default HeroContent;
