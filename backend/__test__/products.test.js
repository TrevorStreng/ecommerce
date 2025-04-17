import request from "supertest";
import mongoose from "mongoose";
import dotenv from "dotenv";

import app from "../app.js";

dotenv.config();

beforeEach(async () => {
  await mongoose.connect(process.env.DATABASE);
});

describe("GET /api/products", () => {
  it("should return all products", async () => {
    const res = await request(app).get("/api/products");
    expect(res.statusCode).toBe(200);
  });
});

describe("GET /api/products?minPrice=2", () => {
  it("should return all products over $2.00", async () => {
    const res = await request(app).get("/api/products?minPrice=2");
    expect(res.statusCode).toBe(200);
  });
});

desrcibe("GET /api/products?");

afterEach(async () => {
  await mongoose.connection.close();
});
