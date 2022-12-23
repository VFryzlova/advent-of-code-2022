import fs from 'fs'

const input = fs.readFileSync('input.txt', 'utf8').split('\n')

console.log(input);

input.push('')

let sum = 0,
    sums = []

for (let i = 0; i < input.length; i++) {
    let item = input[i]

    if (item !== '') {
        sum += Number(item)

    } else if (item === '') {
        sums.push(sum)
        sum = 0
    }
}

sums.sort(function (a, b) { return b - a })

let highest = sums[0],
    second = sums[1],
    third = sums[2],
    total = highest + second + third
