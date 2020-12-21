module.exports = (req, res, next) => {
    //check if user is signed in
    if (!req.user) {
        return res.status(401).send({ error: 'You must log in!' });
    }

    next();
};