const mongoose = require('mongoose');
const Survey = mongoose.model('surveys');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

module.exports = (app) => {

    app.post('/api/surveys',
        requireLogin,
        requireCredits,
        async (req, res) => {

            const { title, subject, body, recipients } = req.body;

            const survey = new Survey({
                title: title,
                subject: subject,
                body: body,
                recipients
            });

            //test
            const saveSurvey = await survey.save();
            res.send(saveSurvey)

        });


};