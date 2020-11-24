const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Route working!');
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});