var objectPoolFactory = function(createObjFn) {
	var objPool = [];

	return {
		create: function() {
			var obj = objPool.length === 0 ?
						createObjFn.apply(this, arguments) : objPool.shift();
		},
		recover: function(obj) {
			objPool.push(obj);
		}
	}
};