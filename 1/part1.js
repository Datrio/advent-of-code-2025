const fs = require('fs')
const path = require('path')
//const lines = fs.readFileSync(path.join(__dirname, 'example.txt'), { encoding: 'utf8' }).trim().split('\n')
const lines = fs.readFileSync(path.join(__dirname, 'input.txt'), { encoding: 'utf8' }).trim().split('\n')

let curNumber = 50
let zeroCount = 0

lines.map(l => {
  const [dir, count] = [l[0], +l.slice(1)]

  if (dir === 'L') {
    curNumber = (curNumber - count + 100) % 100

    if (curNumber < 0) {
      curNumber = 99 + curNumber + 1
    }
  }
  if (dir === 'R') {
    curNumber = (curNumber + count) % 100
  }

  if (curNumber === 0) {
    zeroCount++
  }

  console.log(`After ${l}, current number is ${curNumber}`)
})

console.log('Zero count:', zeroCount)