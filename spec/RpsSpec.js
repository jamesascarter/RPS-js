describe("RockPaperScissors", function(){


	beforeEach(function(){
		rock = new Rock
		paper = new Paper
		scissors = new Scissors
	});

	describe("has three different gestures", function(){

		it("Rock", function(){
			expect(rock.type).toEqual('Rock');
		});

		it("Paper", function(){
			expect(paper.type).toEqual('Paper');
		});

		it("Scissors", function(){
			expect(scissors.type).toEqual('Scissors');
		});


	});

	describe("rules of the game", function() {

		rules = new Rules

		it("When same gestures drawn it is a draw", function() {
			expect(rules.versus("Rock", "Rock")).toEqual("Draw");
		});

		it("Rock beats scissors", function(){
			expect(rules.versus("Rock", "Scissors")).toEqual("Rock wins");

		});

		it("Paper beats rock", function(){
			expect(rules.versus("Paper", "Rock")).toEqual("Paper wins")
		});

		it("Scissors beats paper", function(){
			expect(rules.versus("Scissors", "Paper")).toEqual("Scissors wins")
		});



	});


});