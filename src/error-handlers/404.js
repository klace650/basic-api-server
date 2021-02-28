'use strict';

module.exports = (req, res, next) => {
    res.status(404).json({status: 404, msg: '404 Error - Not Found'});
    next();
;}