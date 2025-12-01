const fs = require('fs')
const path = require('path')

let filename = process.argv[2] === '1' ? 'input.txt' : 'example.txt'  
const lines = fs.readFileSync(path.join(__dirname, filename), { encoding: 'utf8' }).trim().split('\n')

let curNumber = 50
let zeroCount = 0

const floor = (val) => Math.floor(val / 100)

lines.forEach(l => {
  const [dir, count] = [l[0], +l.slice(1)]
  const val = (dir === 'L') ? -count : count

  if (val > 0) {
    zeroCount += floor(curNumber + val) - floor(curNumber)
  } else if (val < 0) {
    let negVal = curNumber - 1

    zeroCount += floor(negVal) - floor(negVal + val)
  }

  curNumber = (curNumber + val) % 100
})

console.log(zeroCount)