import { Utils } from '../utils';

const lines = Utils.getLines('day5/input.txt')

const separatorLine = lines.findIndex(line => line === '')
const mapLines = lines.slice(0, separatorLine-1)
const columnNumberLine = lines[separatorLine-1]
const instructionLines = lines.slice(separatorLine+1)
const numberOfColumns = columnNumberLine.split('   ').length
let map: string[][] = [];
for (let index = 0; index < numberOfColumns; index++) {
    map.push([])
}
for (let index = 0; index < mapLines.length; index++) {
    const cratesInColumn = mapLines[index]
    for(let j = 0; j < numberOfColumns; j++) {
        const crateItem = cratesInColumn[j*4+1]
        if(crateItem !== ' ') {
            map[j].unshift(crateItem)
        }
    }
}

var map2 = map.map(arr => {
    return arr.slice()
});
instructionLines.forEach(line => {
    const moves = line.replace('move ', '').replace('from ', '').replace('to ', '').split(' ')
    const quantity = Number(moves[0])
    const origin = Number(moves[1])-1
    const destination = Number(moves[2])-1
    const crates = map[origin].splice(map[origin].length-quantity, quantity).reverse()
    const crates2 = map2[origin].splice(map2[origin].length-quantity, quantity).reverse()
    map[destination] = map[destination].concat(crates)
    map2[destination] = map2[destination].concat(crates2.reverse())
})

console.log(map.map(col => col.length > 0 ? col.pop() : '').toString().replace(/,/g, ''))
console.log(map2.map(col => col.length > 0 ? col.pop() : '').toString().replace(/,/g, ''))


