import { motion } from "motion/react";

import { Logo } from "@/shared/ui";

function Header({ animate = true, children }) {
  return (
    <motion.header
      {...(animate && {
        initial: {
          opacity: 0,
          y: -30,
          filter: "blur(10px)",
        },
        animate: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        },
        transition: {
          duration: 0.5,
        },
      })}
      className="z-10 flex min-h-20 w-full flex-col items-start gap-4 rounded-4xl px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-10"
    >
      <Logo />

      {children}
    </motion.header>
  );
}

export default Header;
