import { useState } from "react";
import { motion } from "motion/react";

import { EnvelopeSimpleIcon, KeyIcon, UserIcon } from "@phosphor-icons/react";
import { FormInput } from "@/shared/ui/input";

function AuthForm({ mode = "login", onSubmit }) {
  const [remember, setRemember] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const isLogin = mode === "login";
  const title = isLogin ? "Login" : "Register";
  const buttonText = isLogin ? "Sign in" : "Sign up";

  async function handleSubmit(e) {
    e.preventDefault();
    onSubmit(form);
  }

  return (
    <form className="flex w-full flex-col gap-6" onSubmit={handleSubmit}>
      <h2 className="text-text text-center text-3xl font-black">{title}</h2>

      <div className="flex flex-col gap-4">
        {!isLogin && (
          <FormInput
            type="text"
            placeholder="Username"
            iconLeft={<UserIcon weight="bold" size={18} />}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
          />
        )}

        <FormInput
          type={isLogin ? "text" : "email"}
          placeholder={isLogin ? "Username or Email" : "Email"}
          iconLeft={<EnvelopeSimpleIcon weight="bold" size={18} />}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <FormInput
          type="password"
          placeholder="Password"
          iconLeft={<KeyIcon weight="bold" size={18} />}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        {!isLogin && (
          <FormInput
            type="password"
            placeholder="Confirm Password"
            iconLeft={<KeyIcon weight="bold" size={18} />}
            onChange={(e) =>
              setForm({ ...form, confirmPassword: e.target.value })
            }
          />
        )}

        {isLogin && (
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <button
                type="button"
                className={`text-text shadow-primary/50 inset-shadow-surface/30 ring-accent/50 flex h-5 w-9 cursor-pointer rounded-full p-0.5 ring ${remember ? "bg-accent" : "bg-accent/20 "}`}
                style={{
                  justifyContent: "flex-" + (remember ? "end" : "start"),
                }}
                onClick={() => setRemember(!remember)}
              >
                <motion.div
                  className="bg-surface h-4 w-4 rounded-full"
                  layout
                  transition={{
                    duration: 0.2,
                  }}
                />
              </button>
              Remember me
            </div>
            <button type="button" className="text-accent hover:underline">
              Forgot password?
            </button>
          </div>
        )}

        <button className="btn-primary w-full" type="submit">
          {buttonText}
        </button>
      </div>
    </form>
  );
}

export default AuthForm;
