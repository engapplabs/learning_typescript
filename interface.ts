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

