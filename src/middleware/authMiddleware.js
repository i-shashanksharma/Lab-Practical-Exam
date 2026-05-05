const authMiddleware = (req, res, next) => {
    const authHeader = req.headers["authorization"];

    if (authHeader === "admin123") {
        next();
    } else {
        return res.status(403).send("Access Denied");
    }
};

module.exports = authMiddleware;