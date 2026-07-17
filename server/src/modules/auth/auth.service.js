import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { prisma } from "../../lib/prisma.js";
import { AppError } from "../../lib/AppError.js";

const JWT_SECRET = process.env.JWT_SECRET;

export async function register(data) {
  const { username, email, password } = data;

  const existingUsername = await prisma.user.findUnique({
    where: {
      username,
    },
  });

  if (existingUsername)
    throw new AppError(409, "USERNAME_TAKEN", "Username already taken");

  const existingEmail = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (existingEmail)
    throw new AppError(409, "EMAIL_TAKEN", "Email already taken");

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
    select: {
      id: true,
      username: true,
      email: true,
    },
  });

  const token = jwt.sign(
    {
      userId: user.id,
    },
    JWT_SECRET,
    { expiresIn: "7d" },
  );

  return { user, token };
}

export async function login(data) {
  const { username, password } = data;

  const user = await prisma.user.findFirst({
    where: {
      OR: [{ email: username }, { username: username }],
    },
  });

  if (!user)
    throw new AppError(
      401,
      "INVALID_CREDENTIALS",
      "Invalid username/email or password",
    );

  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword)
    throw new AppError(
      401,
      "INVALID_CREDENTIALS",
      "Invalid username/email or password",
    );

  const { password: _, ...userNoPassword } = user;

  const token = jwt.sign(
    {
      userId: user.id,
    },
    JWT_SECRET,
    { expiresIn: "7d" },
  );

  return { user: userNoPassword, token };
}

export async function me(userId) {
  return prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      username: true,
      email: true,
    },
  });
}
