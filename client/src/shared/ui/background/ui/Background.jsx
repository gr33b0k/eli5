import { Orb } from "./Orb";
import { useParallax } from "@/shared/lib";

const ORBS_CONFIG = [
  { className: "-top-10 -left-10 h-40 w-40 blur-[1px]", delay: 0, depth: 0.3 },
  { className: "top-1/3 right-1/4 h-24 w-24 blur-xs", delay: 0.5, depth: 0.8 },
  { className: "top-1/2 left-1/2 h-16 w-16 blur-[1px]", delay: 1, depth: 1.2 },
  { className: "bottom-0 left-1/4 h-32 w-32 blur-sm", delay: 1.5, depth: 0.5 },
  { className: "top-16 right-10 h-12 w-12 blur-[2px]", delay: 0.2, depth: 1.5 },
  {
    className: "right-1/3 bottom-20 h-8 w-8 blur-[2px]",
    delay: 0.7,
    depth: 2.2,
  }, // Мелкий, высокая скорость
  {
    className: "top-1/4 left-[15%] h-20 w-20 blur-[1px]",
    delay: 1.2,
    depth: 1.0,
  },
  {
    className: "top-[60%] left-[8%] h-10 w-10 blur-[2px]",
    delay: 0.4,
    depth: 1.8,
  },
  {
    className: "right-10 bottom-[-5%] h-36 w-36 blur-[3px]",
    delay: 1.8,
    depth: 0.4,
  },
  {
    className: "right-[12%] bottom-[30%] h-16 w-16 blur-[1px]",
    delay: 0.9,
    depth: 1.1,
  },
  { className: "top-12 left-1/3 h-6 w-6 blur-[1px]", delay: 1.1, depth: 2.8 },
  {
    className: "top-1/2 right-[5%] h-5 w-5 blur-[2px]",
    delay: 0.3,
    depth: 3.0,
  },
];

function Background({ className, children }) {
  const { parallaxX, parallaxY, handleMouseMove } = useParallax();

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`bg-gradient relative overflow-hidden ${className}`}
    >
      <div className="pointer-events-none absolute inset-0">
        {ORBS_CONFIG.map((orb, index) => (
          <Orb
            key={index}
            parallaxX={parallaxX}
            parallaxY={parallaxY}
            className={orb.className}
            delay={orb.delay}
            depth={orb.depth}
          />
        ))}
      </div>
      {children}
    </div>
  );
}

export default Background;
