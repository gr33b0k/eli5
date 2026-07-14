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

        <button className="btn-primary w-full" type="submit">
          {buttonText}
        </button>
      </div>
    </form>
  );
}

export default AuthForm;
