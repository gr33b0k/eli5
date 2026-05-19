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
            initial={{
              opacity: 0,
              scale: 0,
              filter: "blur(5px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1,
              delay: index * 0.1,
              type: "spring",
              stiffness: 120,
              damping: 18,
            }}
            style={{
              left: orb.x,
              top: orb.y,
              x: mouseX,
              y: mouseY,
            }}
            className={`absolute ${orb.layer === "front" ? "z-20" : "z-0"}`}
          >
            <motion.div
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
