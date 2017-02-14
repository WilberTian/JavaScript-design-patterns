var setCommnad = function(button, command) {
	button.onclick = function() {
		command.execute();
	}
};

var MenuBar = {
	refresh: function() {
		console.log('MenuBar refresh');
	}
};

var SubMenu = {
	add: function() {
		console.log('SubMenu add');
	},

	del: function() {
		console.log('SubMenu del');
	}
};

var RefreshMenuBarCommand = function(receiver) {
	this._receiver = receiver;
};

RefreshMenuBarCommand.prototype.execute = function() {
	this._receiver.refresh();
};

var AddSubMenuCommand = function(receiver) {
	this._receiver = receiver;
};

AddSubMenuCommand.prototype.execute = function() {
	this._receiver.add();
};

