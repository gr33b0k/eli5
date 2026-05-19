import { motion, useTransform } from "motion/react";

function FloatingCard({
  title,
  text,
  parallaxX,
  parallaxY,
  top,
  left,
  children,
}) {
  return (
    <motion.div
      style={{
        top: `${top}%`,
        left: `${left}%`,
        x: useTransform(parallaxX, (v) => v * 3),
        y: useTransform(parallaxY, (v) => v * 3),
        willChange: "transform",
      }}
      className="glass-30 absolute z-20 flex w-max items-center gap-3 rounded-3xl p-4 pr-7"
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
