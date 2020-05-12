import express from "express";
import upload from "./upload";
import pySpawn from "./pySpawn";

const router = express.Router();

router.post("/", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(500);
  }

  // run python script once image is uploaded
  pySpawn();

  res.json({ ok: true });
});

export default router;
