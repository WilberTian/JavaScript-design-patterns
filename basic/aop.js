Function.prototype.before = function(fn) {
	var self = this;

	return function() {
		fn.apply(this, arguments);
		return self.apply(this, arguments);
	}
}

Function.prototype.after = function(fn) {
	var self = this;

	return function() {
		var result = self.apply(this, arguments);
		fn.apply(this, arguments);

		return result;
	}
}



function print(msg) {
	console.log('print function was called: ' + msg);
}

function prepare() {
	console.log('prepare step to start a function');
}

var func = print.before(prepare);
func('this is a msg');