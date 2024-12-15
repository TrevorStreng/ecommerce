import mongoose from "mongoose";
import app from "./app.js";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });
const port = process.env.PORT || 3000;

mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("DB connection successful!"));

const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
