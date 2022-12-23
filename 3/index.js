// input = list of all items in each bag
// 1 line = 1 bag
// 1 item = 1 character, case sensitive
// bag has 2 compartments ( split 50/50 in half of the string )
// a-z has priority 1-26
// A-Z has priority 27-52

import fs from 'fs'

const input = fs.readFileSync('input.txt', 'utf-8').split(/\r?\n/)
input.pop()

// lookup table
const lookup = {}
let i = 1,
    y = 27

for (i; i <= 26; i++) {
    lookup[String.fromCharCode(i + 64).toLowerCase()] = i
    lookup[String.fromCharCode(i+64).toUpperCase()] = y
    y++
}

// sum of all priority items
let sum = 0
const getSum = (similarType) => {
    return sum += lookup[similarType[0]]
}

// compare those two strings and find common types
const findCommonType = (bag) => {
    const compartmentOne = bag[0].split(''),
        compartmentTwo = bag[1].split('')

        const similarType = compartmentOne.filter(value => {
            return compartmentTwo.includes(value)
        })

        getSum(similarType)
}

// divide each string into halves
input.map(item => {
    const bag = [item.slice(0, item.length / 2), item.slice(item.length / 2)]
    findCommonType(bag)
});

// result
console.log(sum);
