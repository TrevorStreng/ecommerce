import express from "express";

import AppError from "./utils/appError.js";
import userRouter from "./routes/userRouter.js";
import productRouter from "./routes/productRouter.js";

const app = express();

app.use(express.json({ limit: "10kb" }));

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

export default app;
