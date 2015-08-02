$(document).ready(function() {
	$('.hide-menu, #menu-en, #menu-vi').on('click', function() {
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
	})
});