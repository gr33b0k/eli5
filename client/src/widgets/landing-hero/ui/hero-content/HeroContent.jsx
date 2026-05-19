import LevelSelector from "../../../../features/explanation/ui/LevelSelector";
import HeroLevels from "./HeroLevels";

function HeroContent() {
  return (
    <div className="relative z-10 flex max-w-7/8 flex-col gap-4">
      <div className="glass mb-2 flex w-fit items-center gap-2 rounded-full px-5 py-2">
        <div className="bg-accent h-2 w-2 animate-pulse rounded-full" />

        <span className="text-text-muted text-sm font-medium">
          Smart explanations for every mind
        </span>
      </div>

      <h1 className="font-syne text-text text-6xl leading-none font-black">
        Understand{" "}
        <span className="from-primary-active to-primary bg-linear-to-r bg-clip-text text-transparent italic">
          anything
        </span>{" "}
        <br />
        at your level
      </h1>

      <p className="text-text-muted text-lg leading-relaxed">
        ELI5 breaks down complex topics into beautifully simple explanations
        tailored to how you think and learn.
      </p>

      <HeroLevels />

      <button className="btn-primary mt-2 rounded-full px-6 py-3 transition-all duration-300">
        Start for free →
      </button>
    </div>
  );
}

export default HeroContent;
