const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./models/Survey');
require('./services/passport');
//IMPORTANT - see passport.js - must instantiate/require models BEFORE passport
const path = require('path');

const connectDB = async () => {
    try {
        await mongoose.connect(keys.mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log('MongoDB Connected')
    } catch (err) {
        console.error(err.message);
        //exit process with failure
        process.exit(1);
    }
};
connectDB();

const app = express();

app.use(bodyParser.json());

//enable express to use cookies
app.use(
    cookieSession({
        //seven days
        maxAge: 7 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

//Routes
//NOTE: Returns a function, immediatly invoke function with app as arg
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

//production environment
if (process.env.NODE_ENV === 'production') {
    //express serves production assets
    app.use(express.static('client/build'));
    //express serves index.html if route isn't recognized
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});