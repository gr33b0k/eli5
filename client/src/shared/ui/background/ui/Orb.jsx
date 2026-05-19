import { motion, useTransform } from "framer-motion";

export function Orb({ parallaxX, parallaxY, className, delay = 0, depth = 1 }) {
  // Умножаем базовое смещение на индивидуальный коэффициент глубины шара
  const mouseX = useTransform(parallaxX, (v) => v * depth);
  const mouseY = useTransform(parallaxY, (v) => v * depth);

  return (
    <motion.div
      className={`orb absolute ${className}`}
      animate={{ y: [0, 10, 0] }}
      transition={{
        repeat: Infinity,
        duration: 4,
        delay,
        ease: "easeInOut", // Делаем idle-анимацию покачивания более плавной
      }}
      style={{
        x: mouseX,
        y: mouseY,
      }}
    />
  );
}
