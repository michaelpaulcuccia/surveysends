const express = require('express');
require('./services/passport');

const app = express();

//Returns a function, immediatly invokes function with app as arg
require('./routes/authRoutes')(app)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});