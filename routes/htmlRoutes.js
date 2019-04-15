var db = require('../models');
var path = require('path');

var isAuthenticated = require('../config/middleware/isAuthenticated');

module.exports = function(app) {
	//AUTHENTICATION SETUP

	app.get('/', function(req, res) {
		// If the user already has an account send them to the members page
		if (req.user) {
			res.redirect('/members');
		}
		res.sendFile(path.join(__dirname, '../public/login.html'));
	});

	app.get('/signup', function(req, res) {
		// If the user already has an account send them to the members page
		if (req.user) {
			res.redirect('/members');
		}
		res.sendFile(path.join(__dirname, '../public/signup.html'));
	});

	// Here we've add our isAuthenticated middleware to this route.
	// If a user who is not logged in tries to access this route they will be redirected to the signup page
	app.get('/members', isAuthenticated, function(req, res) {
		res.sendFile(path.join(__dirname, '../public/members.html'));
	});

	// 	// Load index page
	// app.get('/', function(req, res) {
	// 	db.Example.findAll({}).then(function(dbExamples) {
	// 		res.render('index', {
	// 			msg: 'Welcome!',
	// 			examples: dbExamples
	// 		});
	// 	});
	// });

	// // Render 404 page for any unmatched routes
	// app.get('*', function(req, res) {
	// 	res.render('404');
	// });
};
