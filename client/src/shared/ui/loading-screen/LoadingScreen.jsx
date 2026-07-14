import { motion } from "motion/react";

const dots = [0, 1, 2];

function LoadingScreen() {
  return (
    <div className="bg-gradient flex h-screen items-center justify-center gap-4">
      {dots.map((dot) => (
        <motion.div
          key={dot}
          className="bg-accent h-5 w-5 rounded-full"
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.2, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: dot * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default LoadingScreen;
