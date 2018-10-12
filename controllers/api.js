exports.install = function() {
	GROUP(['authorize'], function() {
		ROUTE('GET    /logout/', redirect_logout);
	});
};

function redirect_logout() {
	var self = this;
	self.cookie(F.config.cookie, '', '-1 day');
	self.redirect('/');
}