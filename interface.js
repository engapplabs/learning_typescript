;
function operate(x) {
    return Math.pow(x.side, 2);
}
var sampleInterface = { shape: "vaca", side: 20 };
console.log(sampleInterface);
console.log(operate(sampleInterface));
;
function createPlayer() {
    return {
        run: function () { },
        addLives: function (live) { },
        score: function () { return -1; }
    };
}
;
var player1 = createPlayer();
console.log(player1);
var player2 = createPlayer();
console.log(player2 == player1);
