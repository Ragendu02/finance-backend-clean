/* Mock authentication (simulate user role)
const mockAuth = (req, res, next) => {
  // take role from header
  const role = req.headers["role"];

  req.user = {
    role: role || "viewer" // default viewer
  };

  next();
};

// Role-based access control
const allow = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        message: "Access Denied"
      });
    }
    next();
  };
};

module.exports = { mockAuth, allow };*/
const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const header = req.header("Authorization");

  if (!header) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = header.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = auth;