const multer = require("multer");
const path = require("path");

const tempDir = path.join((__dirname, "../", "temp"));

const multerConfig = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, tempDir);
  },
  filename: (_req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: multerConfig,
});

module.exports = upload;