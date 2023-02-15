exports.install = function() {

	ROUTE('+GET /*', 'index');
	ROUTE('-GET /*', 'login');

	// File routes
	FILE('/manifest.json', manifest);
};

function manifest(req, res) {
	res.content(200, '{"name":"{0}","short_name":"{0}","icons":[{"src":"/img/icon.png","sizes":"500x500","type":"image/png"}],"start_url":"/","display":"standalone"}'.format(CONF.name), U.getContentType('json'));
}
