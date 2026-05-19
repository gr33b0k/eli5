import { motion, useTransform } from "motion/react";

import { orbs } from "../../model/orbs";

function HeroOrbs({ parallaxX, parallaxY }) {
  return (
    <>
      {orbs.map((orb, index) => {
        const mouseX = useTransform(parallaxX, (v) => v * orb.depth);
        const mouseY = useTransform(parallaxY, (v) => v * orb.depth);

        return (
          <motion.div
            key={index}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 8 + orb.depth * 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: orb.x,
              top: orb.y,
            }}
            className={`absolute ${orb.layer === "front" ? "z-20" : "z-0"}`}
          >
            <motion.div
              style={{
                x: mouseX,
                y: mouseY,
                height: orb.size,
              }}
              className="orb aspect-square rounded-full"
            />
          </motion.div>
        );
      })}
    </>
  );
}

export default HeroOrbs;
