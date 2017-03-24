

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
	};

	$.getJSON(YOUTUBE_URL, query, callback);
};

// 3) f(render-state)


function renderCallBack(data) {
	//clear previous results if any
	$('.js-search-results').empty();
	for (var i = 0; data.items.length > i; i++) {
		//console.log(data.items[i].snippet.thumbnails.medium.url);
		//console.log("imageId: " + data.items[i].id.videoId);

		// grabbing video and image links from the returned JSON object
		var videoLink = "https://www.youtube.com/watch?v=" + data.items[i].id.videoId;
		var imageURL = data.items[i].snippet.thumbnails.medium.url;
		var imgElement = $('<img>', {src: imageURL, class: "thumbnails"});
		var imgWithLink = $('<a></a>', {href: videoLink, target:"_blank"}).html(imgElement);

		$('.js-search-results').append(imgWithLink);
		
		
	};
	addShadow();
};

function addShadow(){
	$('.thumbnails').hover(function() {
		$(this).toggleClass("hoverAction");
	});
};

// 4) event listeners

$('.js-search-form').submit(function(e) {
	e.preventDefault();
	var query = $(this).find('#searchText').val();

	getApiData(query, renderCallBack);
});


	




















