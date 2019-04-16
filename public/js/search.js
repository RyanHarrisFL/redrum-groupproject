$(document).ready(function() {
	var searchResults = [];
	var searchForm = $('#inputFormSearch');
	var searchActivity = $('#inputActivity');
	var searchSkill = $('#inputSkill');
	var searchTime = $('#inputTime');
	var searchCity = $('#inputCity');
	var searchZip = $('#inputZip');

	$('#searchSubmit').on('click', function(event) {
		event.preventDefault();

		var searchPost = {
			Activity: searchActivity.val().trim(),
			Skill: searchSkill.val().trim(),
			Time: searchTime.val().trim(),
			City: searchCity.val().trim(),
			Zip: searchZip.val().trim()
		};

		console.log(searchPost);

		// searchPost.push(searchResults);

		// ajax get
		// get api route. find activity, where activity name/value 1 or 0.

		$('#inputActivity').val('');
		$('#inputSkill').val('');
		$('#inputTime').val('');
		$('#inputCity').val('');
		$('#inputZip').val('');
	});

	// for (let index = 0; index < array.length; index++) {
	//     const element = array[index];

	// }
});
