import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

import uploadRoutes from "./routes/uploads.js";
import saveResultsRoute from "./routes/saveResults.js";

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use("/uploads", express.static(path.join(process.cwd(), "server/uploads")));

// routes
app.use("/api", saveResultsRoute);
app.use("/api", uploadRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});