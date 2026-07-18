import { motion, useTransform } from "motion/react";

function FloatingCard({
  title,
  text,
  parallaxX,
  parallaxY,
  top,
  left,
  delay,
  children,
  className = "",
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.5,
        y: 20,
        filter: "blur(5px)",
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 1, 0.5, 1],
      }}
      style={{
        top: `${top}%`,
        left: `${left}%`,
        x: useTransform(parallaxX, (v) => v * 3),
        y: useTransform(parallaxY, (v) => v * 3),
        willChange: "transform",
      }}
      className={`glass-15 absolute z-20 w-max items-center gap-3 rounded-3xl p-4 pr-7 ${className}`}
    >
      <div className="glass bg-primary/10 aspect-square h-fit rounded-full p-3">
        {children}
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="text-accent text-lg font-medium">{title}</h3>
        <span className="text-text-muted text-sm">{text}</span>
      </div>
    </motion.div>
  );
}

export default FloatingCard;
