exports.install = function() {
	ROUTE('+GET    /logout/', redirect_logout);
};

function redirect_logout() {
	var self = this;
	self.cookie(CONF.cookie, '', '-1 day');
	self.redirect('/');
}