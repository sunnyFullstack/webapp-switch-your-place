const express = require("express");
const authenticateToken = require("../middleware/auth");

const router = express.Router();

router.get("/admin", authenticateToken, (req, res, next) => {
  res.json({
    message: "we called admin route",
  });

  //   next();
});

module.exports = router;
