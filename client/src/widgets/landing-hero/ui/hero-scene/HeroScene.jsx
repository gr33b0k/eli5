import {
  ChatIcon,
  SlidersHorizontalIcon,
  TreeStructureIcon,
} from "@phosphor-icons/react";

import { motion } from "motion/react";
import brain from "../../assets/brain.png";

import HeroOrbs from "./HeroOrbs";
import FloatingCard from "./FloatingCard";

function HeroScene({ parallaxX, parallaxY }) {
  return (
    <div className="hidden h-full w-full items-center justify-center xl:flex">
      <div className="relative">
        <HeroOrbs parallaxX={parallaxX} parallaxY={parallaxY} />
        <FloatingCard
          title="Explain"
          text="any idea"
          parallaxX={parallaxX}
          parallaxY={parallaxY}
          top={0}
          left={5}
          delay={0.3}
          className="hidden md:flex"
        >
          <ChatIcon size={24} className="text-accent" />
        </FloatingCard>
        <FloatingCard
          title="From simple"
          text="to deep"
          parallaxX={parallaxX}
          parallaxY={parallaxY}
          top={20}
          left={80}
          delay={0.5}
          className="hidden md:flex"
        >
          <TreeStructureIcon size={24} className="text-accent" />
        </FloatingCard>
        <FloatingCard
          title="Adapted"
          text="to your level"
          parallaxX={parallaxX}
          parallaxY={parallaxY}
          top={60}
          left={15}
          delay={0.7}
          className="hidden md:flex"
        >
          <SlidersHorizontalIcon size={24} className="text-accent" />
        </FloatingCard>
        <motion.img
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.9,
          }}
          src={brain}
          alt="Brain"
          className="relative z-10 block h-[min(40vh,320px)] w-auto object-contain drop-shadow-[0_0_70px_#ffffff50] sm:h-[min(55vh,420px)] lg:h-[min(70vh,600px)]"
        />
      </div>
    </div>
  );
}

export default HeroScene;
