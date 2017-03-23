

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

function renderCallBack(data) {
	console.log("from renderCallBack ");
	console.log(data.items[0].snippet.thumbnails.high.url);
	var imageURL = data.items[0].snippet.thumbnails.medium.url;
	$('.js-search-results').append("<img src='imageURL'>");


};

// 3) f(render-state)

// 4) event listeners

$('.js-search-form').submit(function(e) {
//	console.log("from submit event")
	e.preventDefault();
	var query = $(this).find('#searchText').val();
	var a = "test"

	getApiData(query, renderCallBack);
});