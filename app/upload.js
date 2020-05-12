import multer from "multer";

const destDir = "/directions/";
const fileName = "direction.png";

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, destDir),
  filename: (req, file, cb) => cb(null, fileName)
});

const upload = multer({ storage });

export default upload;
