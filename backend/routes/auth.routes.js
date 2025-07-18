const express = require("express");
const authenticateToken = require("../middleware/auth");
const logger = require("../utils/logger");
const { registerUser, loginUser } = require("../controllers/authController");
require("dotenv").config();

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/protected", authenticateToken, (req, res, next) => {
  const { username } = req.user;
  console.log("calling....", username);
  try {
    res.json({
      message: `Access granted to protected route for ${username}.`,
      data: req.user,
    });
  } catch (err) {
    next(err);
    logger.error(err);
  }
});

module.exports = router;
