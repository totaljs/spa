ON('resize2', function() {
	var el = $('#body');
	el.css('height', WH - el.offset().top);
	if (WIDTH() === 'xs') {
		var mm = $('.mainmenu,.mainmenu .scroller-xs');
		mm.css('height', WH - 70);
	}
});

function mainmenu(el) {
	$('.mainmenu').tclass('mainmenu-visible');
}

ON('location', function() {
	$('.mainmenu').rclass('mainmenu-visible');
});
