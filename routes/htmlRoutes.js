var db = require('../models');
var path = require('path');

var isAuthenticated = require('../config/middleware/isAuthenticated');

module.exports = function(app) {
	//AUTHENTICATION SETUP

	app.get('/', function(req, res) {
		// If the user already has an account send them to the profile
		if (req.user) {
			res.redirect('/public/profile.html');
		}
		res.sendFile(path.join(__dirname, '../public/login.html'));
	});

	app.get('/signup', function(req, res) {
		// If the user already has an account send them to the profile
		if (req.user) {
			res.redirect('/public/profile.html');
		}
		res.sendFile(path.join(__dirname, '../public/signup.html'));
	});
};
