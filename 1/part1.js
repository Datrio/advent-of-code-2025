const fs = require('fs')
const path = require('path')

let filename = process.argv[2] === '1' ? 'input.txt' : 'example.txt'  
const lines = fs.readFileSync(path.join(__dirname, filename), { encoding: 'utf8' }).trim().split('\n')

let curNumber = 50
let zeroCount = 0

lines.forEach(l => {
  const [dir, count] = [l[0], +l.slice(1)]
  const val = (dir === 'L') ? -count : count

  curNumber = (curNumber + val) % 100

  if (curNumber === 0) {
    zeroCount++
  }

  if (curNumber < 0) {
    curNumber += 100
  }
})

console.log(zeroCount)