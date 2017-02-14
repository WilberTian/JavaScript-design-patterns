
var closeDoorCommnad = {
	execute: function() {
		console.log('close the door');
	}
};

var openPcCommnad = {
	execute: function() {
		console.log('open the pc');
	}
};

var MarcoCommnad = function() {
	return {
		commandList: [],
		add: function(command) {
			this.commandList.push(command);
		},
		execute: function() {
			this.commandList.forEach(function(command) {
				command.execute();
			});
		}
	};
};

var marcoCommand = MarcoCommnad();
marcoCommand.add(closeDoorCommnad);
marcoCommand.add(openPcCommnad);