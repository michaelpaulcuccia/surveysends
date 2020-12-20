const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = (app) => {

    app.post('/api/stripe', async (req, res) => {

        //console.log(req.body)
        //user - passport de/serializeUser() has access to MongoDB id

        const { id } = req.body;

        console.log('///---///')

        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: '$5 for 5 credits',
            source: id
        });

        //get MongoDB Id
        let userId = req.user._id

        //find user by MongoDB Id
        let user = await User.findOne({ _id: userId });

        if (user) {
            user.credits += 5;

            const userUpdated = await user.save();
            res.send(userUpdated);
        }


    });

};

//NOTE: Returns a function, immediatly invoke function with app as arg

