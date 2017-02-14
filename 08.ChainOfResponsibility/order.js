var order500 = function(orderType, pay, stock) {
	if(orderType === 1 && pay === true) {
		console.log('500元定金预购，得到100元优惠券');
	} else {
		//order200(orderType, pay, stock);
		return 'nextSuccessor';
	}
}

var order200 = function(orderType, pay, stock) {
	if(orderType === 2 && pay === true) {
		console.log('200元定金预购，得到50元优惠券');
	} else {
		//orderNormal(orderType, pay, stock);
		return 'nextSuccessor';
	}
}

var orderNormal = function(orderType, pay, stock) {
	if(stock > 0) {
		console.log('普通购买，无优惠券');
	} else {
		console.log('库存不足');
	}
}

/*
order500(1, true, 500);
order500(1, false, 500);
order500(2, true, 500);
order500(3, false, 500);
*/

var Chain = function(fn) {
	this.fn = fn;
	this.successor = null;
}

Chain.prototype.setNextSuccessor = function(successor) {
	return this.successor = successor;
};

Chain.prototype.passRequest = function() {
	var ret = this.fn.apply(this, arguments);

	if(ret === 'nextSuccessor') {
		return this.successor && this.successor.passRequest.apply(this.successor, arguments)
	}

	return ret;
}

var chainOrder500 = new Chain(order500);
var chainOrder200 = new Chain(order200);
var chainOrderNormal = new Chain(orderNormal);

chainOrder500.setNextSuccessor(chainOrder200);
chainOrder200.setNextSuccessor(chainOrderNormal);

chainOrder500.passRequest(1, true, 500);