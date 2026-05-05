const publicRoute = (req, res) => {
    res.send("This is a public route");
};

const privateRoute = (req, res) => {
    res.send("Welcome to private route");
};

module.exports = {
    publicRoute,
    privateRoute
};