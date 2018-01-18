enum myConstant {
	PI = 3.14,
	e = 2.73,
	log2 = 0.3,
	log5 = 0.7
};

var circleArea = function(radius) {
	return Math.pow(radius, 2) * myConstant.PI;
};

console.log("Finding area of circle: " + circleArea(1));
