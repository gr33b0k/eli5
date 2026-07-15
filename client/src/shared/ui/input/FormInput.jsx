import { EyeIcon, EyeSlashIcon } from "@phosphor-icons/react";
import { useState } from "react";

function FormInput({ className = "", iconLeft, error, ...props }) {
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
        className={`glass-60 text-text focus-within:shadow-even flex items-center gap-3 rounded-3xl px-4 py-2 transition-shadow duration-300 ease-in-out ${error ? "focus-within:shadow-error/50 bg-error/10" : "focus-within:shadow-primary"} ${className} `}
      >
        {iconLeft && (
          <div className="text-text flex shrink-0 items-center justify-center">
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
      {error && <span className="text-error/70 pl-2 text-sm">{error}</span>}
    </div>
  );
}

export default FormInput;
