const path = require('path');
const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination (req, file, cb) {
    cb(null, path.join(__dirname, '../public/uploads'))
  },
  filename (req, file, cb) {
    let date = new Date().getTime();
    cb(null, `${date}_${file.fieldname}.png`);
  }
});

const upload = multer({storage});

router.post('/avatar', upload.single('avatar'), (req, res) => {
  res.json({
    code: '0',
    msg: '',
    data: {
      path: req.file.filename
    }
  })
});

module.exports = router;