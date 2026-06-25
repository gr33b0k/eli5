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
      className="z-10 flex min-h-20 w-full justify-between rounded-4xl px-10 py-5"
    >
      <Logo />

      {children}
    </motion.header>
  );
}

export default Header;
