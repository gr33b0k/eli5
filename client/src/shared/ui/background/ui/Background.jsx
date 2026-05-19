import { Orb } from "./Orb";
import { useParallax } from "@/shared/lib";

export const ORBS_CONFIG = [
  { x: "-4%", y: "-4%", size: 160, blur: "1px", delay: 0, depth: 0.3 },
  { x: "75%", y: "33%", size: 100, blur: "2px", delay: 0.5, depth: 0.8 },
  { x: "50%", y: "50%", size: 60, blur: "1px", delay: 1, depth: 1.5 },
  { x: "25%", y: "80%", size: 130, blur: "4px", delay: 1.2, depth: 0.5 },
  { x: "85%", y: "10%", size: 48, blur: "2px", delay: 0.2, depth: 1.3 },
  { x: "63%", y: "85%", size: 32, blur: "2px", delay: 0.7, depth: 2.2 },
  { x: "15%", y: "25%", size: 80, blur: "1px", delay: 1.2, depth: 1.0 },
  { x: "8%", y: "60%", size: 40, blur: "2px", delay: 0.4, depth: 1.8 },
  { x: "92%", y: "95%", size: 144, blur: "8px", delay: 1.8, depth: 0.4 },
  { x: "84%", y: "65%", size: 64, blur: "1px", delay: 0.9, depth: 1.1 },
  { x: "33%", y: "5%", size: 24, blur: "1px", delay: 1.1, depth: 2.8 },
  { x: "93%", y: "50%", size: 20, blur: "2px", delay: 0.3, depth: 3.0 },
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
            orb={orb}
          />
        ))}
      </div>
      {children}
    </div>
  );
}

export default Background;
