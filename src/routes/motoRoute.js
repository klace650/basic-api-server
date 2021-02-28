'use strict';

// ALL THE USUAL STUFF OR WHATEVER
const express = require('express');
const MotoModel = require('../models/motoModel');
const Motorcycle = require('../models/motoModel');

const moto = new Motorcycle();
const router = express.router();

// ROUTES
router.get('/motorcycle', getMoto);

function getMoto(req, res){
    let all = moto.get();
    res.status(200).json(all);
}