import { Utils } from '../utils';

const lines = Utils.getLines('day4/input.txt')
console.log(lines.map(line => line.split(/[,-]/g)).filter(values => (Number(values[0]) <= Number(values[2]) && Number(values[1]) >= Number(values[3])) || (Number(values[0]) >= Number(values[2]) && Number(values[1]) <= Number(values[3]))).length)


console.log(lines.map(line => line.split(/[,-]/g)).filter(values => (Number(values[1]) >= Number(values[2]) && Number(values[1]) <= Number(values[3])) || (Number(values[2]) >= Number(values[0]) && Number(values[2]) <= Number(values[1])) || (Number(values[0]) >= Number(values[2]) && Number(values[0]) <= Number(values[3])) || (Number(values[3]) >= Number(values[0]) && Number(values[3]) <= Number(values[1]))).length)