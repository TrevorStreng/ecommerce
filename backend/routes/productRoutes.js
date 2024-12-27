import express from "express";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import { protect, restrictTo } from "../controllers/authController.js";

const productRouter = express.Router();

productRouter.route("/").get(getProducts);

productRouter.use(protect);
productRouter.route("/").post(restrictTo("admin"), createProduct);
productRouter
  .route("/:id")
  .patch(restrictTo("admin"), updateProduct)
  .delete(restrictTo("admin"), deleteProduct);

export default productRouter;
