const passport = require('passport');

module.exports = (app) => {

    //login
    app.get('/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    //callback
    app.get('/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/surveys');
        }
    );

    //get access to user
    app.get('/api/current_user', (req, res) => {
        //console.log(req.session) 
        //contains data passport is attempting to store in cookie (mongodb id), passed to deserialize user
        //authReducer - action.payload contains user model, either an object or empty string. empty string is a false value
        res.send(req.user)
    });

    //logout
    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

}

//NOTE: Returns a function, immediatly invoke function with app as arg