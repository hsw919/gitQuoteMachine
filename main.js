$(document).ready(function() {
	let text;
	let author;
	function getNewQuote() {
		$.ajax({
			url: 'https://api.forismatic.com/api/1.0/',
			jsonp: 'jsonp',
			dataType: 'jsonp',
			data: {
				method: 'getQuote',
				lang: 'en',
				format: 'jsonp'
			},
			success: function(data) {
				text = data.quoteText;
				author = data.quoteAuthor;
				$('.quote').html('"' + text + '"');
				if (author) {
					$('.author').html('- ' + author);
				}
				else {
					$('.author').html('- Unknown');
				}
			}
		})
	}
	getNewQuote();

	$('#tweetQuote').on('click', function() {
		window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + text + '"' + ' - ' + author));
	});

	$('#newQuote').on('click', function() {
		getNewQuote();
	});
});