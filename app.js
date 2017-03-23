

// make a request to youtube 
//using the value of the input
// callback function to display the results

// 1) state

var YOUTUBE_URL = "https://www.googleapis.com/youtube/v3/search";

// 2) f(modify-state)

function getApiData(search, callback) {
	var query = {
		part: 'snippet',
		key: 'AIzaSyDGoQFxuEyp6h2c6zoDDVl9L71Rs11R5N0',
		q: search
	}
	console.log('Api function: ' + query.q + " = query.q");

	$.getJSON(YOUTUBE_URL, query, callback)
};

// 3) f(render-state)


function renderCallBack(data) {
	$('.js-search-results').empty();
	console.log(data);
	for (var i = 0; data.items.length > i; i++) {
		console.log(data.items[i].snippet.thumbnails.medium.url);
		var imageURL = data.items[i].snippet.thumbnails.medium.url;
		var img = $('<img>', {src: imageURL, class: "pics"});
		$('.js-search-results').append(img);
	};
/*
	*/

};

// 4) event listeners

$('.js-search-form').submit(function(e) {
//	console.log("from submit event")
	e.preventDefault();
	var query = $(this).find('#searchText').val();

	getApiData(query, renderCallBack);
});