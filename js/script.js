$(document).ready(function() {
	$('.hide-menu, #menu-vi').on('click', function() {
		$('#menu-en').hide();
		$('#menu-vi').hide();
	});

	$('#insert-en').on('click', function() {
		$('#menu-en').show();
		console.log($(this).val());
	});

	$('#insert-vi').on('click', function() {
		$('#menu-vi').show();
		console.log($(this).val());
	});

	$('#menu-en').on('click', function() {
		var audio = 'audio/English_comment.wav';
		var btn = $('#insert-en');

		btn.removeClass('btn-insert').addClass('btn btn-sm');
		btn.html('<i class="glyphicon glyphicon-play"></i>');
		btn.val(audio);
		$('#menu-en').hide();
	});
});