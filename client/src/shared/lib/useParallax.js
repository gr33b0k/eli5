import { useMotionValue, useSpring } from "motion/react";

export function useParallax() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const parallaxX = useSpring(mouseX, {
    stiffness: 200,
    damping: 50,
  });

  const parallaxY = useSpring(mouseY, {
    stiffness: 200,
    damping: 50,
  });

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;

    const x = (e.clientX - innerWidth / 2) / 50;
    const y = (e.clientY - innerHeight / 2) / 50;

    mouseX.set(x);
    mouseY.set(y);
  };

  return {
    parallaxX,
    parallaxY,
    handleMouseMove,
  };
}
