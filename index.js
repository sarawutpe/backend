const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const tourRoute = require("./routes/tours");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const reviewRoute = require("./routes/reviews");
const bookingRoute = require("./routes/bookings");
const connectDB = require("./db");

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

// const corsoptions = {
//   origin: true,
//   credentials: true,
// };

// Database Connect
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Routes
app.get("/", (req, res) => {
  res.send("api is ok");
});
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/review", reviewRoute);
app.use("/api/v1/booking", bookingRoute);

app.listen(port, () => {
  console.log("Server listening on Port", port);
});

module.exports = app;
