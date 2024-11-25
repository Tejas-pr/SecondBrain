import expess from "express";
import mongoose from "mongoose";
import router from "./routes/router";
import dotenv from "dotenv";

const app = expess();
dotenv.config();
app.use(expess.json());

mongoose
  .connect(process.env.MONGOO_URL as string)
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  });

app.use("/api/v1/", router);
