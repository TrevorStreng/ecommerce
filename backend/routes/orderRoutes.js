import express from "express";
import { protect, restrictTo } from "../controllers/authController.js";
import { createOrder, getOrders } from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/", createOrder);
orderRouter.use(protect);
orderRouter.route("/").get(restrictTo("admin"), getOrders);

export default orderRouter;
