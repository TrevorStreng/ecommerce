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

afterEach(async () => {
  await mongoose.connection.close();
});
