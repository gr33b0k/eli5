import { useState } from "react";
import { PaperPlaneRightIcon, StopIcon } from "@phosphor-icons/react";

function InputBox({ onSubmit, disabled }) {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (!value.trim()) return;

    onSubmit(value);
    setValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="glass-40 text-text focus-within:shadow-primary focus-within:shadow-even flex gap-2 rounded-3xl px-4 py-2 transition-shadow duration-300 ease-in-out">
      <input
        value={value}
        disabled={disabled}
        onKeyDown={handleKeyDown}
        onChange={(e) => setValue(e.target.value)}
        className="caret-text active:shadow-accent flex-1 outline-0"
        placeholder="What topic do you want to break down?"
      />
      <button
        onClick={handleSubmit}
        disabled={disabled}
        className={`btn-primary px-3 py-2 text-white shadow-none ${disabled ? "bg-accent/50 pointer-events-none" : ""}`}
      >
        <PaperPlaneRightIcon size={22} />
      </button>
    </div>
  );
}

export default InputBox;
