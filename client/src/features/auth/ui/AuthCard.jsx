import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import { Logo } from "@/shared/ui";

import AuthForm from "./AuthForm";

function AuthCard() {
  const [authType, setAuthType] = useState("login");

  return (
    <div className="flex h-full items-center justify-center">
      <div
        layout
        className="glass-10 flex w-100 flex-col items-center justify-center gap-6 rounded-3xl p-8"
      >
        <AuthForm mode={authType} />
        <div className="text-text-muted text-sm">
          {authType === "login" ? (
            <p>
              Don’t have an account yet?{" "}
              <button
                type="button"
                className="text-accent cursor-pointer hover:underline"
                onClick={() => setAuthType("register")}
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
                onClick={() => setAuthType("login")}
              >
                Sign in
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthCard;
