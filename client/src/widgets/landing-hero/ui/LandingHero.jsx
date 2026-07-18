import HeroScene from "./hero-scene/HeroScene";

import { useParallax } from "@/shared/lib";
import HeroContent from "./hero-content/HeroContent";

function LandingHero() {
  const { parallaxX, parallaxY, handleMouseMove } = useParallax();

  return (
    <main
      onMouseMove={handleMouseMove}
      className="relative grid min-h-0 flex-1 grid-cols-1 items-center gap-10 px-4 py-2 sm:px-18 xl:grid-cols-2"
    >
      <HeroContent />
      <HeroScene parallaxX={parallaxX} parallaxY={parallaxY} />
    </main>
  );
}

export default LandingHero;
