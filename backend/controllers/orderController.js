import mongoose from "mongoose";
import Order from "../models/orderModel.js";
import catchAsync from "../utils/catchAsync.js";

export const getOrders = catchAsync(async (req, res, next) => {
  const { ids, email } = req.query;

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
  if (email) {
    filters.email = email;
  }

  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  const startIndex = (page - 1) * limit;

  const orders = await Order.find(filters).skip(startIndex).limit(limit);
  res.status(200).json({
    status: "success",
    totalResults: orders.length,
    page,
    limit,
    pages: Math.ceil(orders.length / limit),
    orders,
  });
});

export const createOrder = catchAsync(async (req, res, next) => {
  const newOrder = await Order.create(req.body);

  res.status(201).json({
    status: "success",
    newOrder,
  });
});
