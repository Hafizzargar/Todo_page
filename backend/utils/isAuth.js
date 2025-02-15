const isAuth = (req, res, next) => {
    if (req.session.isAuth) {
        next(); // User is authenticated, proceed to next middleware or route handler
    } else {
        res.status(401).send({ status: 500, message: "Session expired, login again" });
    }
};

module.exports = isAuth; // Export correctly
