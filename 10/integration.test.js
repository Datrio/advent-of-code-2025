const fs = require('fs')
const path = require('path')

describe('integration: day X', () => {
  const inputPath = path.join(__dirname, 'input.txt')
  if (!fs.existsSync(inputPath)) {
    test.skip('no input.txt present - skipping template integration tests', () => {})
    return
  }

  const data = fs.readFileSync(inputPath, { encoding: 'utf8' })

  test('part1', () => {
    const result = require('./part1.js')(data)

    expect(result).toBe(507)
  })

  test.skip('part2', () => {
    const result = require('./part2.js')(data)

    expect(result).toBe(X)
  })
})
