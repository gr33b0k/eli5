import { useState } from "react";
import { motion } from "motion/react";
import { PaperPlaneRightIcon, StopIcon } from "@phosphor-icons/react";

function ExplanationInput({ onSubmit, loading }) {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (!value.trim()) return;

    onSubmit(value);
    setValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && onSubmit) {
      handleSubmit();
    }
  };

  return (
    <div className="glass text-text focus-within:shadow-primary focus-within:shadow-even flex gap-2 rounded-3xl px-4 py-2 transition-shadow duration-300 ease-in-out">
      <input
        value={value}
        onKeyDown={handleKeyDown}
        onChange={(e) => setValue(e.target.value)}
        className="caret-text active:shadow-accent flex-1 outline-0"
        placeholder="What topic do you want to break down?"
      />
      <button
        onClick={() => handleSubmit()}
        className="btn-primary px-3 py-2 text-white shadow-none"
      >
        {loading ? <StopIcon size={22} /> : <PaperPlaneRightIcon size={22} />}
      </button>
    </div>
  );
}

export default ExplanationInput;
