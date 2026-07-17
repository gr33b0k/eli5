export function validateForm(form, mode) {
  const errors = {};

  if (mode === "register") {
    if (form.username && form.username.length < 3) {
      errors.username = "Username is too short";
    }

    if (form.email && !isEmail(form.email)) {
      errors.email = "Invalid email";
    }

    if (form.password && form.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }
  }

  if (mode === "login") {
    if (form.login && form.login.includes("@") && !isEmail(form.login)) {
      errors.login = "Invalid email";
    }
  }

  return errors;
}

export function getRequiredErrors(form, mode) {
  const errors = {};

  const fields =
    mode === "login"
      ? ["login", "password"]
      : ["username", "email", "password"];

  fields.forEach((field) => {
    if (!form[field].trim()) {
      errors[field] = true;
    }
  });

  return errors;
}

function isEmail(value) {
  return /^\S+@\S+\.\S+$/.test(value);
}
