'use strict';

function error500(err, req, res){
    res.status(500).send({status: 500, msg: 'Broken or something, I don\'t know'});
}

module.exports = error500;