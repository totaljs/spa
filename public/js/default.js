ON('resize', function() {
	var el = $('#body');
	el.css('height', WH - el.offset().top);
	if (WIDTH() === 'xs') {
		var mm = $('.mainmenu,.mainmenu .scroller-xs');
		mm.css('height', WH - 70);
	}
});

ON('ready', function() {
	$(window).on('resize', function() {
		setTimeout2('resize', function() {
			EMIT('resize');
		}, 100);
	});
	setTimeout(EXEC2('#resize'), 50);
});

function mainmenu(el) {
	$('.mainmenu').tclass('mainmenu-visible');
}

ON('location', function() {
	$('.mainmenu').rclass('mainmenu-visible');
});
