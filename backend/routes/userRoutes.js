import express from "express";

import { getAllUsers } from "../controllers/userController.js";
import { signup, login } from "../controllers/authController.js";

const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.route("/").get(getAllUsers);
userRouter.post("/login", login);

export default userRouter;
