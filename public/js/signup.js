$(document).ready(function() {
	// Getting references to our form and input
	var signUpForm = $('form.signup');

	// When the signup button is clicked, we validate the email and password are not blank
	signUpForm.on('submit', function(event) {
		event.preventDefault();
	});

	// Does a post to the signup route. If successful, we are redirected to the members page
	// Otherwise we log any errors
	function signUpUser(email, password) {
		$.post('/api/signup', {
			email: email,
			password: password
		})
			.then(function(data) {
				window.location.replace(data);
				// If there's an error, handle it by throwing up a boostrap alert
			})
			.catch(handleLoginErr);
	}

	function handleLoginErr(err) {
		$('#alert .msg').text(err.responseJSON);
		$('#alert').fadeIn(500);
	}

	signUpForm.on('submit', function(event) {
		event.preventDefault();
	});

	//function posting data on clicking of submit button
	$('#signUpSubmit-btn').on('click', function(event) {
		event.preventDefault();

		var emailInput = $('input#email-input');
		var passwordInput = $('input#password-input');

		//capturing email and password entered by user
		var userData = {
			email: emailInput.val().trim(),
			password: passwordInput.val().trim()
		};

		//validation of user email and password
		if (!userData.email || !userData.password) {
			return;
		}
		// If we have an email and password, run the signUpUser function
		signUpUser(userData.email, userData.password);
		emailInput.val('');
		passwordInput.val('');

		//capturing of user info entered on signup form
		var userInfo = {
			firstName: $('#first-name').val().trim(),
			lastName: $('#last-name').val().trim(),
			profileStatus: $('#profileStatus').val().trim(),
			city: $('#city').val().trim(),
			state: $('#state').val(),
			zip: $('#zip-code').val().trim(),
			gender: $('#gender').val(),
			age: $('#age').val().trim()
			//photo link stored in AWS
		};
		//capturing user activitiy choice(s) baserd on checkboxes selected
		var Activity = {
			biking: $('#biking').val(),
			yoga: $('#yoga').val(),
			surfing: $('#surfing').val(),
			weightlifting: $('#weightlifting').val(),
			volleyball: $('#volleyball').val(),
			basketball: $('#basketball').val(),
			swimming: $('#swimming').val(),
			rollerblading: $('#rollerblading').val(),
			tennis: $('#tennis').val(),
			mma: $('#mma').val()
		};

		// Send an AJAX POST-request with jQuery
		$.post('/api/updateUserInfo', userInfo)
			// On success, run the following code
			.then(function(data) {
				// Log the data we found
				console.log(data);
			});

		// Empty each input box by replacing the value with an empty string
		$('#first-name').val('');
		$('#last-name').val('');
		$('#profileStatus').val('');
		$('#city').val('');
		$('#state').val('');
		$('#zip-code').val('');
		$('#gender').val('');
		$('#age').val('');

		// Send an AJAX POST-request with jQuery
		$.post('/api/activity', Activity)
			// On success, run the following code
			.then(function(data) {
				// Log the data we found
				console.log('This is the Ajax post data' + data);
			});

		// Empty each input box by replacing the value with an empty string
		$('#biking').val('');
		$('#yoga').val('');
		$('#surfing').val('');
		$('#weightlifting').val('');
		$('#volleyball').val('');
		$('#basketball').val('');
		$('#swimming').val('');
		$('#rollerblading').val('');
		$('#tennis').val('');
		$('#mma').val('');
	});
});
