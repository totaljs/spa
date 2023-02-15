// Download UI components locally
COMPONENTATOR('ui', 'exec,intranetcss,errorhandler', true);

const USER = { id: '123456', name: 'John Connor', sa: true };

AUTH(function($) {
	$.success(USER);
});