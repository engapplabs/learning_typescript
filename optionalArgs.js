//question mark works as optional
function areaOfSquare(side, isInteger) {
    if (isInteger)
        return Math.floor(Math.pow(side, 2));
    return Math.pow(side, 2);
}
console.log(areaOfSquare(5.25));
console.log(areaOfSquare(4.99, true));
