import multer from "multer";
import path from "path";

const destDir = "directions";
const fileName = "direction.jpg";
const dest = path.join(__dirname, `../${destDir}/`);

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, dest),
  filename: (req, file, cb) => cb(null, fileName)
});

const upload = multer({ storage });

export default upload;
