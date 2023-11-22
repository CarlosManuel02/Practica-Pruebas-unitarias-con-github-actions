const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!, Carlos Manuel Cedeño Barrera 2022-0018' xzcawssd);
});

const server = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = { app, server };
