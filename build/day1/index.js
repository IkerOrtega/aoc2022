"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const lines = utils_1.Utils.getLines('day1/input.txt');
let calNum = 0;
let elvesCalories = [];
let lineNumber = 0;
lines.forEach(line => {
    lineNumber++;
    if (line === '') {
        console.log('total calories of elf: ' + calNum);
        elvesCalories.push(calNum);
        calNum = 0;
    }
    else if (lineNumber === lines.length) {
        calNum += Number(line);
        console.log('total calories of elf: ' + calNum);
        elvesCalories.push(calNum);
    }
    else {
        calNum += Number(line);
    }
});
elvesCalories.sort((a, b) => b - a);
const result = elvesCalories[0] + elvesCalories[1] + elvesCalories[2];
console.log('The result is ' + result);
