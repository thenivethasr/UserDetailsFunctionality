const Router = require('express').Router();
const { profile, getProfile } = require('../controllers/profile.js');

Router.get('/profile', getProfile);
Router.put('/profile/updateProfile', profile);

module.exports = Router; 