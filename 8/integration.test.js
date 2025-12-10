const fs = require('fs')
const path = require('path')

describe('integration: day X', () => {
  const data = fs.readFileSync(path.join(__dirname, 'input.txt'), { encoding: 'utf8' })
  
  test('part1', () => {
    const result = require('./part1.js')(data)

    expect(result).toBe(75680)
  })

  test('part2', () => {
    const result = require('./part2.js')(data)

    expect(result).toBe(8995844880)
  })
})
