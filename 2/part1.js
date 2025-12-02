const fs = require('fs')
const path = require('path')

let filename = process.argv[2] === '1' ? 'input.txt' : 'example.txt'  
const lines = fs.readFileSync(path.join(__dirname, filename), { encoding: 'utf8' }).trim().split(',')

let sum = 0

lines.forEach(l => {
    const [from, to] = l.split('-').map(Number)
    
    for (let i = from; i <= to; i++) {
        const nString = i.toString()

        if (nString.length % 2 !== 0) continue

        let strLength = nString.length/2

        if (nString.slice(0, strLength) === nString.slice(strLength)) {
            sum += i * 1
        }
    }
})

console.log(sum)