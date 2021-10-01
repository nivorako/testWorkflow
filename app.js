const express = require('express');

const app = express();

app.get('/', (req, res) => {
    const stuff = {
        author:"Bibi",
        message:"Hiola"
    }
    res.send(stuff);
})

module.exports = app;