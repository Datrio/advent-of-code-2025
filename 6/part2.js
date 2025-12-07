module.exports = (data) => {
  const lines = data.split('\n')

  const cols = lines[0].length
  let sum = 0, currentSymbol, currentNums = []

  for (let i = 0; i <= cols; i++) {
    const col = lines.map(line => line[i] || null).filter(c => c !== null)
    const op = col.pop()
    if (op === '+' || op === '*') currentSymbol = op

    const digits = col.filter(Number).join('')
    
    if (digits) {
      currentNums.push(+digits)
    } else if (currentNums.length) {
      sum += currentNums.reduce(
        (acc, v) => (currentSymbol === '*' ? acc * v : acc + v),
        currentSymbol === '*' ? 1 : 0
      )
      currentNums = []
    }
  }

  return sum
}