const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const {
    publicRoute,
    privateRoute
} = require("../controllers/routeController");

router.get("/public", publicRoute);

router.get("/private", authMiddleware, privateRoute);

module.exports = router;