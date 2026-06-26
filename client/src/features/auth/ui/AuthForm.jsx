import { useState } from "react";
import { motion } from "motion/react";

import { EnvelopeSimpleIcon, KeyIcon, UserIcon } from "@phosphor-icons/react";
import { FormInput } from "@/shared/ui/input";

function AuthForm({ mode = "login" }) {
  const [remember, setRemember] = useState(false);

  const isLogin = mode === "login";
  const title = isLogin ? "Login" : "Register";
  const buttonText = isLogin ? "Sign in" : "Sign up";

  return (
    <form className="flex w-full flex-col gap-6">
      <h2 className="text-text text-center text-3xl font-black">{title}</h2>

      <div className="flex flex-col gap-4">
        {!isLogin && (
          <FormInput
            type="text"
            placeholder="Username"
            iconLeft={<UserIcon weight="bold" size={18} />}
          />
        )}

        <FormInput
          type={isLogin ? "text" : "email"}
          placeholder={isLogin ? "Username or Email" : "Email"}
          iconLeft={<EnvelopeSimpleIcon weight="bold" size={18} />}
        />

        <FormInput
          type="password"
          placeholder="Password"
          iconLeft={<KeyIcon weight="bold" size={18} />}
        />

        {!isLogin && (
          <FormInput
            type="password"
            placeholder="Confirm Password"
            iconLeft={<KeyIcon weight="bold" size={18} />}
          />
        )}

        {isLogin && (
          <div className="flex items-center justify-between">
            <label className="text-text flex items-center gap-2 text-sm">
              <input type="checkbox" className="border-border outline-border" />
              Remember me
            </label>

            <button
              type="button"
              className="text-accent text-sm hover:underline"
            >
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
