import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import AppError from "./utils/appError.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";
import orderRouter from "./routes/orderRoutes.js";

const app = express();

app.use(express.json({ limit: "10kb" }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

export default app;
