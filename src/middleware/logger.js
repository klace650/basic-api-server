'use strict';

module.exports = (req, res, next) => {
    console.log('REQUESTED', req.path, req.method);
}