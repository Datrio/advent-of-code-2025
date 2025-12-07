function removeSmallestDigit(line) {
  for (let i = 0; i < line.length - 1; i++) {
    if (line[i] < line[i + 1]) {
      return line.substring(0, i) + line.substring(i + 1)
    }
  }

  // if we didn't find a smaller digit, remove the last one
  return line.substring(0, line.length - 1)
}

module.exports = (data) => {
  const lines = data.split('\n')

  const finalSum = lines.map(line => {
    // iterate over the first numbers, if we find a smaller number, remove it, until we have 12 digits
    let newLine = line
    while (newLine.length > 12) {
      newLine = removeSmallestDigit(newLine)
    }

    return newLine
  }).reduce((a, b) => a + Number(b), 0)

  return finalSum
}