Function.prototype.after = function(fn) {
	var self = this;

	return function() {
		var ret = self.apply(this, arguments);
		if(ret === 'nextSuccessor') {
			return fn.apply(this, arguments);
		}

		return ret;
	}
};

var order = order500.after(order200).after(orderNormal);