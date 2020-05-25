import express from "express";
import upload from "./upload";
import pySpawn from "./pySpawn";

const router = express.Router();

router.post("/", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400);
  }

  // run movement processes once image is uploaded
  pySpawn(res);
});

export default router;
