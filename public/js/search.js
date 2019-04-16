$(document).ready(function() {
	var searchResults = [];
	var searchForm = $('#inputFormSearch');
	var searchActivity = $('#inputActivity');
	var searchSkill = $('#inputSkill');
	var searchTime = $('#inputTime');
	var searchCity = $('#inputCity');
	var searchZip = $('#inputZip');

	//when submit button ckicked on search page
	$('#searchSubmit').on('click', function(event) {
		event.preventDefault();

		//variable capturing the information input by the user
		var searchPost = {
			Activity: searchActivity.val().trim(),
			Skill: searchSkill.val().trim(),
			Time: searchTime.val().trim(),
			City: searchCity.val().trim(),
			Zip: searchZip.val().trim()
		};

		console.log(searchPost);

		//clearing the input fields back to null value on click
		$('#inputActivity').val('');
		$('#inputSkill').val('');
		$('#inputTime').val('');
		$('#inputCity').val('');
		$('#inputZip').val('');
	});
});
