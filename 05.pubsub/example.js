var LOGIN_EVENT = 'LOGIN_EVENT';

function login() {
	$.ajax('http://***.com/login', function(data){
		event_bus.trigger(LOGIN_EVENT, data);
	});
}

var header = (function(){
	event_bus.listen(LOGIN_EVENT, function(data) {

	});

	// other code
})();

var nav = (function(){
	event_bus.listen(LOGIN_EVENT, function(data) {

	});

	// other code
})();