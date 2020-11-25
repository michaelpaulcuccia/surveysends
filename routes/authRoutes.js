const passport = require('passport');

module.exports = (app) => {

    app.get('/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        }),
        (req, res) => {

        }
    );

    app.get('/auth/google/callback',
        passport.authenticate('google')

    );

}

//NOTE: Returns a function, immediatly invoke function with app as arg