module.exports = (req, res, next) => {
    //check if user has at least 1 credit
    if (req.user.credits < 1) {
        return res.status(403).send({ error: 'You do not have enough credits!' });
    }

    next();
};