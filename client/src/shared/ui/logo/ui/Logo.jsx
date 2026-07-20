import { GraduationCapIcon } from "@phosphor-icons/react";
import React from "react";

function Logo({ compact = false, className = "" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <GraduationCapIcon className="text-accent" weight="bold" size={24} />
      {!compact && (
        <div className="flex items-center gap-2">
          <span className="text-accent text-2xl font-extrabold">ELI5</span>
          <div className="border-primary text-text-muted/70 hidden border-l-2 pl-2 text-[9px] leading-tight font-semibold md:block">
            <span className="block">Explain it like</span>
            <span className="block">i'm five</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Logo;
