const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = (app) => {

    app.post('/api/stripe', async (req, res) => {

        //console.log(req.body)

        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: '$5 for 5 credits',
            source: req.body.id
        });

        console.log(charge)

    });

};

//NOTE: Returns a function, immediatly invoke function with app as arg