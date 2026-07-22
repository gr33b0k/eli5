import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./modules/auth/auth.routes.js";
import chatRoutes from "./modules/chat/chat.routes.js";

const app = express();

const allowedOrigins = process.env.CLIENT_URL.split(",");

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRoutes);
app.use("/chat", chatRoutes);

app.get("/debug/cookies", (req, res) => {
  res.json({
    cookies: req.cookies,
    headers: req.headers.cookie,
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server started");
});
