const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const mongoose = require('mongoose');
const User = mongoose.model('users');
const requireLogin = require('../middlewares/requireLogin');

module.exports = (app) => {

    app.post('/api/stripe', requireLogin, async (req, res) => {

        //console.log(req.body)
        const { id } = req.body;

        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: '$5 for 5 credits',
            source: id
        });

        //get MongoDB Id
        //req.user - passport de/serializeUser() has access to MongoDB id
        let userId = req.user._id

        //find user by MongoDB Id
        let user = await User.findOne({ _id: userId });

        //make sure user exists in DB
        if (user) {

            //add five credits
            user.credits += 5;

            //update user in DB
            const userUpdated = await user.save();
            res.send(userUpdated);

        } else {
            return res.status(401).send({ error: 'You must be an existing user.' });
        }

    });

};

//NOTE: Returns a function, immediatly invoke function with app as arg