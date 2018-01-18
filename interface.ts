interface operateInterface {
	shape: string;
	side?: number;
};

function operate(x: operateInterface) {
	return Math.pow(x.side, 2);
}

var sampleInterface = {shape: "vaca", side: 20};

console.log(sampleInterface);
console.log(operate(sampleInterface));

//////////////////////////////////////////////////

interface Player {
	run(): void;
	addLives(lives: number): void;
	getScore(): number;
};

function createPlayer(): Player {
	return {
		run: function() {},
		addLives: function(live: number) {},
		score: function() {return -1}
	};
};

var player1 = createPlayer();
console.log(player1);
var player2 = createPlayer();
console.log(player2 == player1);

