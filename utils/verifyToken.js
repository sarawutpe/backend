const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  // const token = req.cookies.accessToken;
  // Get Authorization: Bearer TOKEN
  const authorization = req.headers["authorization"] ?? "";
  const token = authorization.split(" ")[1];

  if (!token) {
    return res.status(401).json({ success: false, message: "Token" });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(401).json({ success: false, message: "Invalid token" });
    }
    req.user = user;
    next();
  });
};

const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.role === "admin") {
      next();
    } else {
      return res.status(401).json({ success: false, message: "NOT AUTH" });
    }
  });
};

const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.role === "admin") {
      next();
    } else {
      return res.status(401).json({ success: false, message: "NOT AUTH" });
    }
  });
};

module.exports = {
  verifyToken,
  verifyUser,
  verifyAdmin,
};
