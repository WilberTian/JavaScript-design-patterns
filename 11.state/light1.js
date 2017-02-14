var FSM = {
	off: {
		buttonWasPressed: function() {
			console.log('关灯');
			this.currentState = FSM.on;
		}
	},

	on: {
		buttonWasPressed: function() {
			console.log('开灯');
			this.currentState = FSM.off;
		}
	}
};

var Light = function() {
	this.currentState = FSM.off;
	this.button = null;
}

Light.prototype.init = function() {
	var self = this;

	self.button = document.getElementById('btn');
	self.button.onclick = function() {
		self.currentState.buttonWasPressed.call(self);
	}
}