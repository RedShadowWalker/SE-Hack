import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected successfully"))
.catch((err) => console.error("MongoDB connection error:", err));

dotenv.config();

import uploadRoutes from "./routes/uploadRoutes.js";
import saveResultsRoute from "./routes/saveResults.js";
import assignmentsRoute from './routes/assignments.js';
import subsRoute from './routes/assignmentSubmissions.js';

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use("/uploads", express.static(path.join(process.cwd(), "server/uploads")));

app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: ['http://localhost:5173'],   // your Vite dev server
  credentials: true,                   // if you later send cookies or auth headers
}));

// routes
app.use("/api/quiz-results", saveResultsRoute);
app.use("/api/uploadRoutes", uploadRoutes);

app.use('/api/assignments', assignmentsRoute);
app.use('/api/assignments', subsRoute);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});