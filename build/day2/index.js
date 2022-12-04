"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Day2 = void 0;
const utils_1 = require("../utils");
/*
Rock: A X 1p
Paper: B Y 2p
Scissors: C Z 3p
Lose: 0p
Draw: 3p
Win: 6p
*/
const pointMatrix = [
    [4, 8, 3],
    [1, 5, 9],
    [7, 2, 6]
];
const X = 0;
const Y = 1;
const Z = 2;
const A = 0;
const B = 1;
const C = 2;
class Day2 {
    static calculateRoundScore(line) {
        const play = line.split(' ');
        const myPlay = eval(play[0]);
        const opPlay = eval(play[1]);
        return pointMatrix[myPlay][opPlay];
    }
}
exports.Day2 = Day2;
let totalPoints = 0;
const lines = utils_1.Utils.getLines('day1/testinput.txt');
lines.forEach(line => {
    totalPoints += Day2.calculateRoundScore(line);
});
console.log("Total Points: " + totalPoints);
