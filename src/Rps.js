function Rules() {};

function Rock() {
	this.type = "Rock";
};
function Paper() {
	this.type = "Paper";
};
function Scissors(){
	this.type = "Scissors"
};

Rules.prototype.versus = function(choice1, choice2){
	if(choice1 === choice2)
		return "Draw";
	else if (choice1 === "Rock" && choice2 === "Scissors")
		return "Rock wins";
	else if (choice1 === "Paper" && choice2 === "Rock")
		return "Paper wins"
	else (choice1 === "Scissors" && choice2 === "Paper")
		return "Scissors wins" 
};