import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import { useUserStore, login, register } from "@/entities/user";
import { Logo } from "@/shared/ui";

import AuthForm from "./AuthForm";

function AuthCard() {
  const setUser = useUserStore((state) => state.setUser);

  const [mode, setMode] = useState("login");

  async function handleAuth(data) {
    if (mode === "login") {
      const user = await login({
        username: data.login,
        password: data.password,
      });

      setUser(user);
      return;
    }

    const user = await register(data);

    setUser(user);
  }

  return (
    <motion.div
      key={mode}
      initial={{
        opacity: 0,
        y: -5,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 5,
      }}
      transition={{
        duration: 0.3,
      }}
      className="glass-10 flex w-100 flex-col items-center justify-center gap-6 rounded-3xl p-8"
    >
      <AuthForm mode={mode} onSubmit={handleAuth} />
      <div className="text-text-muted text-sm">
        {mode === "login" ? (
          <p>
            Don’t have an account yet?{" "}
            <button
              type="button"
              className="text-accent cursor-pointer hover:underline"
              onClick={() => setMode("register")}
            >
              Sign up
            </button>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <button
              type="button"
              className="text-accent cursor-pointer hover:underline"
              onClick={() => setMode("login")}
            >
              Sign in
            </button>
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default AuthCard;
