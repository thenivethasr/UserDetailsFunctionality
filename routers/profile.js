const Router = require('express').Router();
const { profile } = require('../controllers/profile.js');

Router.post('/profile', profile);


module.exports = Router;