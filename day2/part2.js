import fs from 'fs'
import chalk from 'chalk';

const lineArray = fs.readFileSync('./input.txt')
    .toString()
    .split("\n");

const gameArray = lineArray
    .map((line) => {
        const [, gameList] = line.split(':');
        const rounds = gameList.split(';');

        const gameObj = {}
        rounds.map((round) => {
            const roundColors = round.split(',')
            roundColors.map(roundColor => {
                const [number, color] = roundColor.trim().split(' ')
                gameObj[color] = gameObj?.[color] >= Number(number)
                    ? gameObj[color]
                    : Number(number)
            })
        })
        return gameObj;
    })
    .reduce((acc, curr) => acc + (curr.red * curr.green * curr.blue), 0)


console.log(chalk.blue(JSON.stringify(gameArray)))
