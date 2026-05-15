import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import aiRoutes from "./modules/ai/ai.routes.js";
import authRoutes from "./modules/auth/auth.routes.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

app.use("/", aiRoutes);
app.use("/auth", authRoutes);

app.listen(3000, () => {
  console.log("Server started");
});
