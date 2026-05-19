import { motion, useTransform } from "motion/react";

export function Orb({ parallaxX, parallaxY, orb }) {
  const mouseX = useTransform(parallaxX, (v) => v * orb.depth);
  const mouseY = useTransform(parallaxY, (v) => v * orb.depth);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        delay: orb.delay,
        type: "spring",
        stiffness: 120,
        damping: 18,
      }}
      style={{
        top: orb.y !== "auto" ? orb.y : undefined,
        left: orb.x !== "auto" ? orb.x : undefined,
        right: orb.right || undefined,
        bottom: orb.bottom || undefined,
        x: mouseX,
        y: mouseY,
      }}
      className="absolute z-0"
    >
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 6 + orb.depth * 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          height: orb.size,
          filter: `blur(${orb.blur})`,
        }}
        className="orb aspect-square rounded-full"
      />
    </motion.div>
  );
}

export default Orb;
