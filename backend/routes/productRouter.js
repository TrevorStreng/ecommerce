import express from "express";
import {
  getAllProducts,
  createProduct,
} from "../controllers/productController.js";
import { protect } from "../controllers/authController.js";

const productRouter = express.Router();

productRouter.route("/").get(getAllProducts).post(createProduct);

productRouter.use(protect);

export default productRouter;
