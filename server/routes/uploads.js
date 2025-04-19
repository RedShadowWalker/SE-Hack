// server/routes/upload.js
import express from "express";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

// 1) configure multer to save to /server/uploads
const upload = multer({ dest: "server/uploads/" });

// 2) configure Cloudinary
cloudinary.config({
  cloud_name:     process.env.CLOUDINARY_CLOUD_NAME,
  api_key:        process.env.CLOUDINARY_API_KEY,
  api_secret:     process.env.CLOUDINARY_API_SECRET,
});

// 3) POST /api/upload
router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    // local temp file path
    const filePath = req.file.path;

    // upload to Cloudinary
    const result = await cloudinary.uploader.upload(filePath, {
      folder: "my_uploads",               // optional
      resource_type: "auto",              // accepts images, videos, etc.
    });

    // delete temp file
    fs.unlinkSync(filePath);

    // return Cloudinary URL
    res.json({ url: result.secure_url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
