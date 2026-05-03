function ExplanationInput({ onSubmit }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && onSubmit) {
      onSubmit(e.target.value);
    }
  };

  return (
    <input
      onKeyDown={handleKeyDown}
      className="glass text-text caret-text active:shadow-accent focus:shadow-primary focus:shadow-even rounded-4xl px-5 py-4 outline-0 transition-shadow duration-300 ease-in-out"
      placeholder="What topic do you want to break down?"
    />
  );
}

export default ExplanationInput;
