var db = require('../models');
var passport = require('../config/passport');
var multer = require('multer');
var upload = multer();
//var host = req.host;
// var filePath = req.protocol + "://" + host + '/' + req.file.path;
//a part of the setup for the image upload
var storage = multer.diskStorage({
	destination: '../public/assets/images',
	filename: function(req, file, callback) {
		crypto.pseudoRandomBytes(16, function(err, raw) {
			if (err) return callback(err);

			callback(null, raw.toString('hex') + path.extname(file.originalname));
		});
	}
});

module.exports = function(app) {
	// Using the passport.authenticate middleware with our local strategy.
	// If the user has valid login credentials, send them to the members page.
	// Otherwise the user will be sent an error
	app.post('/api/login', passport.authenticate('local'), function(req, res) {
		// Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
		// So we're sending the user back the route to the members page because the redirect will happen on the front end
		// They won't get this or even be able to access this page if they aren't authed
		res.json('/members');
	});

	// Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
	// how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
	// otherwise send back an error
	app.post('/api/signup', function(req, res) {
		console.log(req.body);
		db.User
			.create({
				email: req.body.email,
				password: req.body.password
			})
			.then(function() {
				res.redirect(307, '/api/login');
			})
			.catch(function(err) {
				console.log(err);
				res.json(err);
			});
	});

	// Route for displaying the user Profile
	app.get('/api/users/:email', function(req, res) {
		db.User
			.findOne({
				where: {
					email: req.params.email
				},
				include: [ db.Tables ],
				include: [ db.Activity ]
			})
			.then(function(dbUser) {
				res.json(dbUser);
			});
	});

	// This route returns all of the post queries
	app.get('/api/post/all', function(req, res) {
		Post.findAll({
			include: [ db.User ],
			include: [ db.Tables ],
			include: [ db.Activity ]
		}).then(function(results) {
			res.json(results);
		});
	});

	app.delete('/api/post/:id', function(req, res) {
		db.Post
			.destroy({
				where: {
					id: req.params.id
				}
			})
			.then(function(dbAuthor) {
				res.json(dbAuthor);
			});
	});

	// Route for logging user out
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});

	// Route for getting some data about our user to be used client side
	app.get('/api/user_data', function(req, res) {
		if (!req.user) {
			// The user is not logged in, send back an empty object
			res.json({});
		} else {
			// Otherwise send back the user's email and id
			// Sending back a password, even a hashed password, isn't a good idea
			res.json({
				email: req.user.email,
				id: req.user.id
			});
		}
	});

	// Route for creating profile.
	app.post('/api/profile', function(req, res) {
		db.Tableone.create(req.body).then(function(dbTableone) {
			res.json(dbTableone);
		});
	});

	// Route for creating post.
	app.post('/api/post', function(req, res) {
		db.Post.create(req.body).then(function(dbPost) {
			res.json(dbPost);
		});
	});

	// Route for creating DM -- FUTURE FUNCTIONALITY
	// app.post("/api/message", function(req, res){
	//   db.Message.create(req.body).then(function(dbMessage) {
	//     res.json(dbMessage);
	//   });
	// });

	// Route for creating Activity Skill Level.
	app.post('/api/activity', function(req, res) {
		db.Activity.create(req.body).then(function(dbActivity) {
			res.json(dbActivity);
		});
	});

	app.post('/', upload.single('avatar'), function(req, res) {
		if (!req.file) {
			console.log('No file received');
			return res.send({
				success: false
			});
		} else {
			console.log('file received');
			return res.send({
				success: true
			});
		}
	});

	//added by mike
	app.post('/api/updateUserInfo', function(req, res) {
		db.Tableone.create(req.body).then(function(dbTableone) {
			res.json(dbTableone);
		});
	});

	app.post('/api/updateActivity', function(req, res) {
		db.Tableone.create(req.body).then(function(dbActivity) {
			res.json(dbActivity);
		});
	});
};
