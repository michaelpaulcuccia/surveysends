const passport = require('passport');

module.exports = (app) => {

    //login
    app.get('/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        }),
        (req, res) => {

        }
    );

    //callback
    app.get('/auth/google/callback',
        passport.authenticate('google')

    );

    //get access to user
    app.get('/api/current_user', (req, res) => {
        res.send(req.user)
    });

    //logout
    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    });


}

//NOTE: Returns a function, immediatly invoke function with app as arg