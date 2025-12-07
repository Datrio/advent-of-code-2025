const fs = require('fs')
const path = require('path')

describe('integration: day 4', () => {
  const data = fs.readFileSync(path.join(__dirname, 'input.txt'), { encoding: 'utf8' })
  
  test('part1', () => {
    const result = require('./part1.js')(data)

    expect(result).toBe(1547)
  })

  test('part2', () => {
    const result = require('./part2.js')(data)

    expect(result).toBe(8948)
  })
})
