import HeroScene from "./hero-scene/HeroScene";

import { useParallax } from "../model/useParallax";
import LevelSelector from "../../../features/explanation/ui/LevelSelector";
import HeroContent from "./hero-content/HeroContent";

function LandingHero() {
  const { parallaxX, parallaxY, handleMouseMove } = useParallax();

  return (
    <main
      onMouseMove={handleMouseMove}
      className="relative grid min-h-0 flex-1 grid-cols-2 items-center px-18"
    >
      <HeroContent />
      <HeroScene parallaxX={parallaxX} parallaxY={parallaxY} />
    </main>
  );
}

export default LandingHero;
