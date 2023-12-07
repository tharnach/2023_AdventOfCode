import fs from 'fs'
import chalk from 'chalk';

const lineArray = fs.readFileSync('./input.txt')
    .toString()
    .split("\n");
    
const numberWordMap = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
}

const numberWords = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
]

const thing = lineArray
    .map((line) => {
        for(let i = 1; i < line.length; i++){
            const sub = line.substring(0, i);
            const foundWord = numberWords.find((word) => sub.includes(word))
            if(foundWord) {
                const replaced = sub.replace(foundWord, `${numberWordMap[foundWord]}$&`)
                return `${replaced}${line.substring(i)}`
            }
        }
        return line
    })
    .map((line) => {
        for(let i = line.length; i >= 0; i--){
            const sub = line.substring(i);
            const foundWord = numberWords.find((word) => sub.includes(word))
            if(foundWord) {
                const replaced = sub.replace(foundWord, `$&${numberWordMap[foundWord]}`)
                return `${line.substring(0, i)}${replaced}`
            }
        }
        return line
    })
    .map((line) => [
        line.toString().split('').find((char) => !isNaN(parseInt(char, 10))),
        line.toString().split('').reverse().find((char) => !isNaN(parseInt(char, 10)))
    ])
    .map(([first, last]) => Number(first + last))
    .reduce((acc, curr) => acc + curr, 0);

console.log(chalk.greenBright.bold(thing))
