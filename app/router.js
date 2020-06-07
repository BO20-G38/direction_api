import express from "express";
import upload from "./upload";
import { emitClient } from "./socket";

const router = express.Router();

router.post("/", upload.single("file"), (req, res) => {
  const code = !req.file ? 400 : 200;

  emitClient();
  res.sendStatus(code);
});

export default router;
