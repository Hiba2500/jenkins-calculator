const express = require('express');
const app = express();

app.get('/add/:a/:b', (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    const result = a + b;
    res.status(200).json({ result: result });
});

module.exports = app;