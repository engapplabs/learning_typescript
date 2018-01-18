var myConstant;
(function (myConstant) {
    myConstant[myConstant["PI"] = 3.14] = "PI";
    myConstant[myConstant["e"] = 2.73] = "e";
    myConstant[myConstant["log2"] = 0.3] = "log2";
    myConstant[myConstant["log5"] = 0.7] = "log5";
})(myConstant || (myConstant = {}));
;
var circleArea = function (radius) {
    return Math.pow(radius, 2) * myConstant.PI;
};
console.log("Finding area of circle: " + circleArea(1));
