const fs = require('fs')
const path = require('path')
//const lines = fs.readFileSync(path.join(__dirname, 'example.txt'), { encoding: 'utf8' }).trim().split('\n')
const lines = fs.readFileSync(path.join(__dirname, 'input.txt'), { encoding: 'utf8' }).trim().split('\n')

let curNumber = 50
let zeroCount = 0

lines.forEach(l => {
  const [dir, count] = [l[0], +l.slice(1)]
  const val = (dir === 'L') ? -count : count
  
  if (val > 0) {
    zeroCount += Math.floor((curNumber + val) / 100) - Math.floor(curNumber / 100)
  } else if (val < 0) {
    zeroCount += Math.floor((curNumber - 1) / 100) - Math.floor((curNumber + val - 1) / 100)
  }

  curNumber = (((curNumber + val) % 100) + 100) % 100
})

console.log(zeroCount)