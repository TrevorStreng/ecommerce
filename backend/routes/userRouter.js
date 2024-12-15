import express from "express";

import { getAllUsers } from "../controllers/userController.js";
import { signup } from "../controllers/authController.js";

const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.route("/").get(getAllUsers);

export default userRouter;
