import mongoose from "mongoose";
import Product from "../models/productModel.js";
import AppError from "../utils/appError.js";
import catchAsync from "../utils/catchAsync.js";

export const getProducts = catchAsync(async (req, res, next) => {
  const { ids, category, minPrice, maxPrice, sale, gender } = req.query;

  const filters = {};

  if (ids) {
    const idArray = ids
      .split(",")
      .map((id) => {
        return mongoose.Types.ObjectId.isValid(id)
          ? mongoose.Types.ObjectId.createFromHexString(id)
          : null;
      })
      .filter(Boolean);

    if (idArray.length) {
      filters._id = { $in: idArray };
    }
  }
  if (category) {
    filters.category = category;
  }
  if (minPrice || maxPrice) {
    filters.price = {};
    if (minPrice) filters.price.$gte = Number(minPrice);
    if (maxPrice) filters.price.$lte = Number(maxPrice);
  }
  if (sale) {
    filters.sale = sale;
  }
  if (gender) {
    filters.gender = gender;
  }

  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  const startIndex = (page - 1) * limit;

  // const totalProducts = await Product.countDocuments(filters);
  const products = await Product.find(filters).skip(startIndex).limit(limit);

  res.status(200).json({
    status: "success",
    totalResults: products.length,
    page,
    limit,
    pages: Math.ceil(products.length / limit),
    products,
  });
});

export const createProduct = catchAsync(async (req, res, next) => {
  const newItem = await Product.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      product: newItem,
    },
  });
});

export const updateProduct = catchAsync(async (req, res, next) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!product) return next(new AppError("No product found with that ID", 404));

  res.status(200).json({
    status: "success",
    data: product,
  });
});

export const deleteProduct = catchAsync(async (req, res, next) => {
  await Product.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: "success",
  });
});
