$(document).ready(function() {
	var data = [
		"<h2>Topic sentence</h2>\
		<p>English writers start a paragraph with a major idea. Think, if you can only say what you want to say in ONE sentence, what would be it?</p>\
		<p>A topic sentence conveys your attitude: What do you think about the topic? Do you agree or disagree? How much do you agree (or disagree)? And Why?</p>\
		<p>'I like bread because it's delicious' is a good topic sentence.</p>\
		<p>'Bread is made from carb' is not a good topic sentence (because this is a common fact and it doesn't tell your attitude)</p>",
		"<p>A topic sentence should be written as a simple sentence. If you have to make it a complex sentence, make sure it doesn't go beyond two clauses.</p>\
		<p>This is to make sure that you focus on a single central idea.</p>"
	];

	$('#insert-en').on('click', function() {
		var audio = $('audio');
		if($(this).val() == 'play')
		{
			if(audio.attr('src') != 'audio/English_comment.wav')
			{
				audio.attr('src', 'audio/English_comment.wav');
			}
			$(this).val('pause');
			audio[0].play();
		}
		else
		{
			$(this).val('play');
			audio[0].pause();
		}
	});

	$('#insert-vi').on('click', function() {
		var audio = $('audio');
		if($(this).val() == 'play')
		{
			if(audio.attr('src') != 'audio/Vietnamese_comment.wav')
			{
				audio.attr('src', 'audio/Vietnamese_comment.wav');
			}
			$(this).val('pause');
			audio[0].play();
		}
		else
		{
			$(this).val('play');
			audio[0].pause();
		}
	});

	$('#hint').html(data[0]);
	$('#btn-next').on('click', function() {
		$('#hint').html(data[1]);
		$(this).removeClass('btn-success').addClass('btn-info');
		$(this).prop('disabled', true);
		$(this).text('End');
	});
});