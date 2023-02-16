// Download UI components locally
COMPONENTATOR('ui', 'exec,intranetcss,errorhandler,loading,selected,page,importer,layout', true);

const USER = { id: '123456', initials: 'JC', name: 'John Connor', sa: true };

AUTH(function($) {
	$.success(USER);
});