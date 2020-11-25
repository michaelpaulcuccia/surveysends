const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

//IMPORTANT - see server.js, must instantiate/require models BEFORE passport
const User = mongoose.model('users');

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, async (accessToken, refreshToken, profile, done) => {

    //console.log('accessToken: ' + accessToken);
    //console.log('refreshToken: ' + refreshToken);
    //console.log(JSON.stringify(profile));
    //console.log(profile.id)

    //check for user
    /*
    User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
            done(null, existingUser);
        } else {
            new User({ googleId: profile.id }).save()
                .then(user => done(null, user));
        }
    });
    */

    /*
    const existingUser = await User.findOne({ googleId: profile.id });

    if (existingUser) {
        done(null, existingUser);
        console.log('user already exists')
    } else if (!existingUser) {
        const newUser = new User({ googleId: profile.id }).save();
        done(null, newUser);
        console.log('user did not exist')
    }
    */

})
);