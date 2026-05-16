import { GraduationCapIcon } from "@phosphor-icons/react";
import React from "react";

function Logo({ className = "" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <GraduationCapIcon className="text-accent text-3xl" weight="bold" />
      <div className="flex items-center gap-2">
        <span className="text-accent text-3xl font-extrabold">ELI5</span>
        <div className="border-primary text-text-muted/70 border-l-2 pl-2 text-[11px] leading-tight font-semibold">
          <span className="block">Explain it like</span>
          <span className="block">i'm five</span>
        </div>
      </div>
    </div>
  );
}

export default Logo;
