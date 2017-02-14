function currying(fn) {
	var args = [];

	Array.prototype.push.apply(args, Array.prototype.slice.call(arguments, 1));
    
    return function() {
        Array.prototype.push.apply(args, Array.prototype.slice.call(arguments));
        if (args.length >= fn.length) {
            return fn.apply(null, args);
        }
        else {
            return currying.apply(null, [fn].concat(args));
        }
    }
}

function add(a, b) {
	return a + b;
}

var increase = currying(add)(1);

var decrease = currying(add)(-1);

var num = 6;

console.log(increase(num));




function curry(fn) {
    var args = [];

    Array.prototype.push.apply(args, Array.prototype.slice.call(arguments, 1));
    
    return function() {
        Array.prototype.push.apply(args, Array.prototype.slice.call(arguments));
        return fn.apply(null, args);
    }
}

var increase = curry(add, 1);

var decrease = curry(add, -1);

var num = 6;

console.log(increase(num));
