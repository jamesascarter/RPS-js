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
	else if ((choice1 === rock.type && choice2 === scissors.type) || (choice1 === scissors.type && choice2 === rock.type))
		return "Rock wins";
	else if ((choice1 === paper.type && choice2 === rock.type) || (choice1 === rock.type && choice2 === paper.type))
		return "Paper wins"
	else ((choice1 === scissors.type && choice2 === paper.type) || (choice1 === scissors.type && choice2 === paper.type))
		return "Scissors wins" 
};