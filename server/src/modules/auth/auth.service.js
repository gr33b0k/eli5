import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { prisma } from "../../lib/prisma.js";

const JWT_SECRET = process.env.JWT_SECRET;

export async function register(data) {
  const { username, email, password } = data;

  const existingUser = await prisma.user.findFirst({
    where: {
      OR: [{ email }, { username }],
    },
  });

  if (existingUser) throw new Error("User already exists");

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

  if (!user) throw new Error("User not found");

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) throw new Error("Invalid password");

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
