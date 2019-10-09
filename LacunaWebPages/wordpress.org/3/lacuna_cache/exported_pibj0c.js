
(function($){
	$.ajax({
		url : '/lang-guess/lang-guess-ajax.php?uri=%2F',
		dataType: 'html'
	}).done(function(data) {
		if ( ! data ) return;
		$(document).ready( function() {
			$('#lang-guess-wrap').html(data);
		});
	});
})(jQuery);
