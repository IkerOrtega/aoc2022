import { Utils } from '../utils';

const pointMatrix: number[][] = [[3,4,8],[1,5,9],[2,6,7]]
const lines = Utils.readInput('day2/input.txt').replace(/[XA]/g,'0').replace(/[YB]/g,'1').replace(/[ZC]/g,'2').split(/\r/).filter(line => line !== '')
console.log(lines.reduce((prev, curr) => prev + pointMatrix[Number(curr.split(' ')[0])][Number(curr.split(' ')[1])],0))