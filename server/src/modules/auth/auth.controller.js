import { me, register, login } from "./auth.service.js";

export async function registerController(req, res) {
  try {
    const { user, token } = await register(req.body);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.json(user);
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
}

export async function loginController(req, res) {
  try {
    const { user, token } = await login(req.body);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.json(user);
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
}

export async function logoutController(req, res) {
  res.clearCookie("token");

  res.json({ success: true });
}

export async function meController(req, res) {
  try {
    const user = await me(req.user.userId);

    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    return res.json(user);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
}
