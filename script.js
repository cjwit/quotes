var colors = ['purple', 'red', 'blue', 'green'];

$(document).ready(function(){

	var i = 0;
	var c = 1;

	$.getJSON('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=20&callback=', function(data){
		var l = data.length;
		var cl = colors.length;

		var author = data[i].title;
		var quote = data[i].content;
		$('#quote').html(quote);
		$('#author').html(author);	

		var urlString = quote.replace(/<p>/gi, "").replace(/<\/p>/gi, "") + " &mdash; " + author;
		var tweet = '<a target="_blank" class="twitter-share-button" href="https://twitter.com/intent/tweet?text=' + urlString + '" data-size=large><button class="btn btn-default btn-primary"><i class="fa fa-twitter"></i></button></a>'
		$('#tweet').html(tweet);

		$('button').on('click', function(){
			if (i + 1 < l) {
				i += 1;
				var author = data[i].title;
				var quote = data[i].content;
			} else {
				var author = "";
				var quote = "Refresh the page for more quotes";
			}

			if (c + 1 < cl) {
				c += 1;
			} else {
				c = 0;
			}

			var newColor = colors[c];

			$('body').removeClass();
			$('body').addClass(newColor);

			$('#quote').html(quote);
			$('#author').html(author);

			var urlString = quote.replace(/<p>/gi, "").replace(/<\/p>/gi, "") + " &mdash; " + author;
			var tweet = '<a target="_blank" class="twitter-share-button" href="https://twitter.com/intent/tweet?text=' + urlString + '" data-size=large><button class="btn btn-default btn-primary"><i class="fa fa-twitter"></i></button></a>'
			$('#tweet').html(tweet);

		});

	});

});