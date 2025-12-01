const fs = require('fs')
const path = require('path')
//const lines = fs.readFileSync(path.join(__dirname, 'example.txt'), { encoding: 'utf8' }).trim().split('\n')
const lines = fs.readFileSync(path.join(__dirname, 'input.txt'), { encoding: 'utf8' }).trim().split('\n')

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