import { Utils } from '../utils';

const lines = Utils.getLines('day4/input.txt')
let repeatedItems: string[] = []
let badges: string[] = []
lines.forEach(line => {
    new Set(line.substring(0, line.length/2).split('')).forEach(item => new Set(line.substring(line.length/2).split('')).has(item) ? repeatedItems.push(item) : null)
})
console.log(repeatedItems)
console.log(repeatedItems.reduce((prev, curr) => prev + (curr === curr.toUpperCase() ? curr.charCodeAt(0) - 38 : curr.charCodeAt(0) - 96), 0))

for(let i = 0; i < lines.length; i+=3) {
    new Set(lines[i].split('')).forEach(char1 => {new Set(lines[i+1].split('')).has(char1) && new Set(lines[i+2].split('')).has(char1)? badges.push(char1) : null})
}

console.log(badges)
console.log(badges.reduce((prev, curr) => prev + (curr === curr.toUpperCase() ? curr.charCodeAt(0) - 38 : curr.charCodeAt(0) - 96), 0))
