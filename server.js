const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User'); //must instantiate models BEFORE passport
require('./services/passport');

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

//Returns a function, immediatly invokes function with app as arg
require('./routes/authRoutes')(app)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});