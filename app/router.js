import express from "express";
import upload from "./upload";

const router = express.Router();

router.post("/", upload.single("file"), (req, res) => {
  const code = !req.file ? 400 : 200;
  res.status(code);
});

export default router;
