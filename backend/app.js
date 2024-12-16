import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import AppError from "./utils/appError.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";

const app = express();

app.use(express.json({ limit: "10kb" }));
app.use(cookieParser());
app.use(cors());

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

export default app;
