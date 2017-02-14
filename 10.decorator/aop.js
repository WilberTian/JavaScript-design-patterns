var ajax = function(type, url, param) {

};

ajax = ajax.before(function(type, url, param) {
	param.Token = getToken();
})