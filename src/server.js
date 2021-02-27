'use strict';
// 3rd 
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;
app.use(express.json());

// INTERNAL ROUTES
const error404 = require('./error-handlers/404.js');
const error500 = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');

// ERROR HANDLING
app.use('*', error404);
app.use(error500);

// START SERVER
module.exports = {
    server: app,
    star: (PORT) => {
        app.listen(PORT, () => {
            console.log(`You hear that? On port ${PORT}?`);
        })
    }
}