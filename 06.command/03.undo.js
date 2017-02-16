

var MoveCommand = function(receiver, pos) {
	this.receiver = receiver;
	this.pos = pos;
	this.previousPos = null;
};

MoveCommand.prototype.execute = function() {
	this.receiver.start(this.pos);
	this.previousPos = this.receiver.getPreviousPos();
}

MoveCommand.prototype.undo = function() {
	this.receiver.start(this.previousPos);
}