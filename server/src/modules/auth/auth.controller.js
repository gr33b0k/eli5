import { register, login } from "./auth.service.js";

export async function registerController(req, res) {
  try {
    const { user, token } = await register(req.body);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.json({ user });
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

    return res.json({ user });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
}
