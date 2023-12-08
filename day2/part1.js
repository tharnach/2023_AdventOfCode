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
    .reduce((acc, curr, index) => {
        if(curr.red <= 12 && curr.green <= 13 && curr.blue <= 14){
            return acc + index + 1
         } else {
            return acc;
         } 
    }, 0)


console.log(chalk.blue(JSON.stringify(gameArray)))

// const jsonObject = lineArray
//     .map(line => {
//         const [gameId, gameList] = line.split(':');
//         const [, gameNumber] = gameId.split(' ');
//         const rounds = gameList.split(';');
//         const game = { [`game_${gameNumber}`]:{}}
//         rounds.map((round, index) => {
//             game[`game_${gameNumber}`][`round_${index + 1}`] = []
//             const roundColors = round.split(',')
//             roundColors.map(roundColor => {
//                 const [number, color] = roundColor.trim().split(' ')
//                 game[`game_${gameNumber}`][`round_${index + 1}`].push({[color]: Number(number)})
//             })
//         })
//         return game;
//     })
// console.log(chalk.red(JSON.stringify(jsonObject)))
