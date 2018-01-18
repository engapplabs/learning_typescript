//1. define the label function for each situation
//2. implement the largerst one with optional parameters
//implemeting
function areaOfQuad(side1, side2) {
    if (side2 == undefined)
        return Math.pow(side1, 2);
    return side1 * side2;
}
console.log(areaOfQuad(2, 505));
