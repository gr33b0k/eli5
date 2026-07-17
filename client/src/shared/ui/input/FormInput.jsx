import { useState } from "react";
import { motion } from "motion/react";

import { EyeIcon, EyeSlashIcon, SpadeIcon } from "@phosphor-icons/react";

function FormInput({ className = "", iconLeft, error, message, ...props }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const inputType =
    props.type === "password"
      ? isPasswordVisible
        ? "text"
        : "password"
      : props.type;

  return (
    <div className="flex w-full flex-col gap-1.5">
      <div
        className={`glass-60 text-text focus-within:shadow-even flex items-center gap-3 rounded-xl px-4 py-2 transition-shadow duration-300 ease-in-out ${error ? "shadow-even shadow-error/50" : "focus-within:shadow-primary"} ${className} `}
      >
        {iconLeft && (
          <div
            className={`flex shrink-0 items-center justify-center transition-colors duration-300 ${error ? "text-error" : "text-text"} `}
          >
            {iconLeft}
          </div>
        )}

        <input
          {...props}
          type={inputType}
          onChange={(e) => {
            setHasValue(Boolean(e.target.value));
            props.onChange?.(e);
          }}
          className="text-text placeholder:text-text/40 caret-primary w-full bg-transparent outline-none"
        />

        {props.type === "password" && (
          <button
            type="button"
            tabIndex={-1}
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            className={`text-text flex shrink-0 items-center justify-center ${
              hasValue ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            {isPasswordVisible ? (
              <EyeSlashIcon size={18} weight="bold" />
            ) : (
              <EyeIcon size={18} weight="bold" />
            )}
          </button>
        )}
      </div>
      {message && (
        <motion.span
          initial={{
            opacity: 0,
            height: 0,
          }}
          animate={{
            opacity: 1,
            height: "auto",
          }}
          exit={{
            opacity: 0,
            height: 0,
          }}
          className="text-error text-sm"
        >
          {message}
        </motion.span>
      )}
    </div>
  );
}

export default FormInput;
