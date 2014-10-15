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


});