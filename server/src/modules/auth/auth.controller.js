import { AppError } from "../../lib/AppError.js";
import { me, register, login } from "./auth.service.js";

function handleError(res, error) {
  if (error instanceof AppError) {
    return res.status(error.status).json({
      error: error.message,
      code: error.code,
      meta: error.meta,
    });
  }

  console.error(error);
  return res.status(500).json({ error: "Internal server error" });
}

export async function registerController(req, res) {
  try {
    const { user, token } = await register(req.body);

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(201).json(user);
  } catch (error) {
    return handleError(res, error);
  }
}

export async function loginController(req, res) {
  try {
    const { user, token } = await login(req.body);

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.json(user);
  } catch (error) {
    return handleError(res, error);
  }
}

export async function logoutController(req, res) {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });

  res.json({ success: true });
}

export async function meController(req, res) {
  try {
    const user = await me(req.user.userId);

    if (!user) {
      return res.status(401).json({
        error: "Unauthorized",
      });
    }

    return res.json(user);
  } catch (error) {
    return handleError(res, error);
  }
}
