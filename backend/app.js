const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const errorHandler = require("./middleware/errorHandler");
const logger = require("./utils/logger");
const connectDB = require("./config/db");

require("dotenv").config();

const PORT = process.env.PORT || 1234;

const app = express();
// app.use(cookieParser());

app.use(express.json());
connectDB();

app.use("/api", apiRoutes);
// 🛑 Global Error Handler (last middleware)
app.use(errorHandler);

app.listen(PORT, () => {
  logger.info(`Server is running on the port number ${PORT}`);
});
