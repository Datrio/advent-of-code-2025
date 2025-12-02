const fs = require('fs')
const path = require('path')

let filename = process.argv[2] === '1' ? 'input.txt' : 'example.txt'  
const lines = fs.readFileSync(path.join(__dirname, filename), { encoding: 'utf8' }).trim().split(',')

let sum = 0

const rx = /^(\d+)\1+$/

lines.forEach(l => {
  const [from, to] = l.split('-').map(Number)
  
  for (let i = from; i <= to; i++) {
    const nString = i.toString()
    
    if (nString.match(rx) === null) continue
    
    sum += i
  }
})

console.log(sum)