function findTwoHighestDigits(line) {
    const maxDigit = Math.max(...line)
    const digitIndex = line.indexOf(maxDigit)

    const restLine = line.substring(digitIndex + 1)
    const restMaxDigit = Math.max(...restLine)

    if (!restLine) {
      return [maxDigit, null]
    }

    return [maxDigit, restMaxDigit]
  }

module.exports = (data) => {
  const lines = data.split('\n')

  const finalSum = lines.map(line => {
    let [digitOne, digitTwo] = findTwoHighestDigits(line)

    if (!digitTwo) {
      const digitIndex = line.indexOf(digitOne)
      const beforeDigitLine = line.substring(0, digitIndex)

      const r = findTwoHighestDigits(beforeDigitLine)

      if (!r[1] || r[1] < digitOne) {
        return [r[0], digitOne]
      }

      return r
    } else {
      return [digitOne, digitTwo]
    }
  })
  .map(([digitOne, digitTwo]) => Number(`${digitOne}${digitTwo}`))
  .reduce((a, b) => a + b, 0)

  return finalSum
}