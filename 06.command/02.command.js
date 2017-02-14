var setCommand = function(button, command) {
	button.onclick = function() {
		command.execute();
	};
};

var MenuBar = {
	refresh: function() {
		console.log('MenuBar refresh');
	}
};

var RefreshMenuBarCommand = function(receiver) {
	return {
		execute: function() {
			receiver.refresh();
		}
	}
};

var refreshMenuBarCommand = RefreshMenuBarCommand(Menubar);

setCommand(btn, refreshMenuBarCommand);