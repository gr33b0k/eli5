function HeroLevel({ title, text, isActive, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`flex w-1/3 cursor-pointer items-center gap-3 rounded-3xl p-4 pr-7 transition-all ${
        isActive
          ? "glass inset-shadow-accent bg-primary"
          : "glass-10 hover:glass-20"
      } `}
    >
      <div
        className={`glass bg-primary/10 aspect-square h-fit rounded-full p-3 transition-all ${isActive ? "inset-shadow-accent" : ""}`}
      >
        {children}
      </div>

      <div className="flex flex-col justify-center text-left">
        <h3
          className={`text-lg leading-tight font-semibold transition-all ${isActive ? "text-white" : "text-accent"}`}
        >
          {title}
        </h3>

        <span
          className={`text-xs leading-tight transition-all ${isActive ? "text-white/80" : "text-text-muted"}`}
        >
          {text}
        </span>
      </div>
    </button>
  );
}

export default HeroLevel;
