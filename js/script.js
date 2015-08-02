$(document).ready(function() {
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
});