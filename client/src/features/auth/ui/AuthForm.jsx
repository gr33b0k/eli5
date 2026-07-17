import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import { EnvelopeSimpleIcon, KeyIcon, UserIcon } from "@phosphor-icons/react";
import { FormInput } from "@/shared/ui/input";

import { validateForm, getRequiredErrors } from "../model/validation";

function AuthForm({ mode = "login", onSubmit }) {
  const [form, setForm] = useState({
    username: "",
    email: "",
    login: "",
    password: "",
  });

  const [formError, setFormError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const [fieldInvalid, setFieldInvalid] = useState({});

  const isLogin = mode === "login";

  const title = isLogin ? "Login" : "Register";
  const buttonText = isLogin ? "Sign in" : "Sign up";

  const identityField = isLogin ? "login" : "email";

  async function handleSubmit(e) {
    e.preventDefault();

    const requiredErrors = getRequiredErrors(form, mode);
    const validationErrors = validateForm(form, mode);

    setFieldErrors(validationErrors);

    setFieldInvalid({
      ...requiredErrors,
      ...Object.keys(validationErrors).reduce((acc, key) => {
        acc[key] = true;
        return acc;
      }, {}),
    });

    if (Object.keys(requiredErrors).length > 0) {
      setFormError("Fill required fields");
    } else {
      setFormError("");
    }

    if (
      Object.keys(requiredErrors).length > 0 ||
      Object.keys(validationErrors).length > 0
    ) {
      return;
    }

    try {
      await onSubmit(form);
    } catch (error) {
      switch (error.code) {
        case "USERNAME_TAKEN":
          setFormError("");
          setFieldInvalid((prev) => ({
            ...prev,
            username: true,
          }));
          setFieldErrors((prev) => ({
            ...prev,
            username: "This username is already taken",
          }));
          break;

        case "EMAIL_TAKEN":
          setFormError("");
          setFieldInvalid((prev) => ({
            ...prev,
            email: true,
          }));
          setFieldErrors((prev) => ({
            ...prev,
            email: "This email is already taken",
          }));
          break;

        case "INVALID_CREDENTIALS":
          setFormError("Wrong username or password");

          setFieldInvalid((prev) => ({
            ...prev,
            login: true,
            password: true,
          }));

          break;

        default:
          setFormError("Something went wrong");
      }
    }
  }

  function updateField(field, value) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    setFieldErrors((prev) => {
      const next = {
        ...prev,
      };

      delete next[field];

      return next;
    });

    setFieldInvalid((prev) => {
      const next = {
        ...prev,
      };

      delete next[field];

      return next;
    });

    setFormError("");
  }

  return (
    <motion.form
      noValidate
      className="flex w-full flex-col gap-6"
      onSubmit={handleSubmit}
    >
      <h2 className="text-text text-center text-3xl font-black">{title}</h2>

      <div className="flex flex-col gap-4">
        {!isLogin && (
          <FormInput
            type="text"
            placeholder="Username"
            iconLeft={<UserIcon weight="bold" size={18} />}
            error={fieldInvalid.username}
            message={fieldErrors.username}
            onChange={(e) => updateField("username", e.target.value)}
          />
        )}

        <FormInput
          type={isLogin ? "text" : "email"}
          placeholder={isLogin ? "Username or Email" : "Email"}
          iconLeft={<EnvelopeSimpleIcon weight="bold" size={18} />}
          error={fieldInvalid[identityField]}
          message={fieldErrors[identityField]}
          onChange={(e) => updateField(identityField, e.target.value)}
        />

        <FormInput
          type="password"
          placeholder="Password"
          iconLeft={<KeyIcon weight="bold" size={18} />}
          error={fieldInvalid.password}
          message={fieldErrors.password}
          onChange={(e) => updateField("password", e.target.value)}
        />

        <AnimatePresence>
          {formError && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              className="text-error text-center text-sm"
            >
              {formError}
            </motion.div>
          )}
        </AnimatePresence>

        <button className="btn-primary w-full rounded-xl" type="submit">
          {buttonText}
        </button>
      </div>
    </motion.form>
  );
}

export default AuthForm;
