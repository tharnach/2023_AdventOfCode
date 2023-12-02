import fs from 'fs'
import chalk from 'chalk';

const stringArray = fs.readFileSync('./input.txt')
    .toString()
    .split("\n\n");

console.log(chalk.greenBright.bold(stringArray))
