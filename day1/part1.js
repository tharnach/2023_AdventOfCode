import fs from 'fs'
import chalk from 'chalk';

const lineArray = fs.readFileSync('./input.txt')
    .toString()
    .split("\n");

const thing = lineArray
    .map((line) => [
        line.split('').find((char) => !isNaN(parseInt(char, 10))),
        line.split('').reverse().find((char) => !isNaN(parseInt(char, 10)))
    ])
    .map(([first, last]) => Number(first + last))
    .reduce((acc, curr) => acc + curr, 0);

console.log(chalk.greenBright.bold(thing))