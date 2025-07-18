const express = require("express");
const router = express.Router();

const authRoutes = require("./auth.routes");
const adminRoutes = require("./admin.routes");

// ✅ Mount all subroutes directly into one shared router
router.use(adminRoutes);
router.use(authRoutes);

module.exports = router;
