'use strict';

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

module.exports = {
    server: app,
    star: (PORT) => {
        app.listen(PORT, () => {
            console.log(`You hear that? On port ${PORT}?`);
        })
    }
}