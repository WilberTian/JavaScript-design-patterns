var httpRequest = function(id) {
	console.log('issue request: ' + id);
}

var proxyHttpRequest = (function(){
	var cache = [];
	var timer;

	return function(id) {
		cache.push(id);

		if(timer) return;

		timer = setTimeout(function(){
			httpRequest(cache.join(','));
			clearTimeout(timer);
			timer = null;
			cache.length = 0;
		}, 2000)
	}

})();