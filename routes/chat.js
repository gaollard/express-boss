const express = require('express');
const router = express.Router();

router.get('/',  (req, res, next) => {
  let body = req.body;
  res.json({
    data: body
  });
});

module.exports = router;