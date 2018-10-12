AUTH(function(req, res, flags, next) {

	/*
	var cookie = req.cookie(CONF.cookie);
	if (!cookie || cookie.length < 20)
		return next(false);

	var obj = F.decrypt(cookie, CONF.authkey);
	if (!obj)
		return next(false);

	var session = MAIN.sessions[obj.id];
	if (session) {
		// Extends session
		session.expire = NOW.add('5 minutes');
		return next(true, session);
	}
	*/

	// Default user
	var user = {};
	user.id = '12345678901234567890';
	user.name = 'Peter Sirka';
	user.expire = NOW.add('5 minutes');

	var tmp = user.name.split(' ');
	user.initials = tmp[0][0] + tmp[1][0];

	MAIN.sessions[user.id] = user;
	next(true, user);
});

// Clears expired sessions
ON('service', function(counter) {
	if (counter % 5 !== 0)
		return;
	var keys = Object.keys(MAIN.sessions);
	for (var i = 0; i < keys.length; i++) {
		var id = keys[i];
		if (MAIN.sessions[id].expire < NOW)
			delete MAIN.sessions[id];
	}
});