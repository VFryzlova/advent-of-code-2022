// A = rock, B = paper, C = scissors
// X = rock, Y = paper, Z = scissors
// score: (rock = 1, paper = 2, scissors = 3) + (lost = 0, draw = 3, won = 6)

import fs from 'fs'
let count = 0
const input = fs.readFileSync('input.txt', 'utf8')
    .split('\n')
    .map(line => {
        let scoreOpponent = 0,
            scoreMe = 0,
            opponent = line[0],
            me = line[2]

        if (opponent === 'A') {
            scoreOpponent = 1
        } else if (opponent === 'B') {
            scoreOpponent = 2
        } else if (opponent === 'C') {  
            scoreOpponent = 3
        }

        if (me === 'X') {
            scoreMe = 1
        } else if (me === 'Y') {
            scoreMe = 2
        } else if (me === 'Z') {
            scoreMe = 3
        }

        const result = calculateScore(scoreOpponent, scoreMe)

        function calculateScore(scoreOpponent, scoreMe) {
            if (scoreOpponent === scoreMe) {
                return 6 + scoreMe
            } else if (scoreOpponent < scoreMe) {
                return 0 + scoreMe
            } else if (scoreOpponent > scoreMe) {
                return 6 + scoreMe
            }
        }
        count += result
        console.log(count);
    })


