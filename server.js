const express = require("express");
const app = express();

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (authHeader === "admin123") {
    next();
  } else {
    res.status(403).json({ message: "Access Denied" });
  }
};

app.get("/public", (req, res) => {
  res.send("This is a public route");
});

app.get("/private", authMiddleware, (req, res) => {
  res.send("Welcome to private route");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
