//1. define the label function for each situation
//2. implement the largerst one with optional parameters

// for square
function areaOfQuad(side1: number);

// for rectangle
function areaOfQuad(side1: number, side2: number);

//implemeting
function areaOfQuad(side1: number, side2?: number): number {
	if(side2 == undefined)
		return Math.pow(side1, 2);
	return side1 * side2;
}

console.log(areaOfQuad(2, 505));	
