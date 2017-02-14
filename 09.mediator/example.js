var goods = {
	'red|32G': 3,
	'red|16G': 0,
	'blue|32G': 1,
	'blue|16G': 6
};

var mediator = (function() {
	var colorSelect = document.getElementById('colorSelect');
	var memorySelect = document.getElementById('memorySelect');
	var numberInput = document.getElementById('numberInput');
	var colorInfo = document.getElementById('colorInfo');
	var memoryInfo = document.getElementById('memoryInfo');
	var numberInfo = document.getElementById('numberInfo');
	var nextBtn = document.getElementById('nextBtn');

	return {
		changed: function(obj) {

		}
	}
})();

colorSelect.onchange = function() {
	mediator.changed(this);
}

memorySelect.onchange = function() {
	mediator.changed(this);
}