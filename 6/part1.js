module.exports = (data) => {
  const lines = data.split('\n')

  const symbols = lines.pop().split(/\s+/).filter(v => v !== '')

  const numbers = lines.map(l => l.split(/\s+/).filter(v => v !== '').map(Number))

  const sum = symbols.reduce((total, sym, idx) =>
    total + numbers.reduce((acc, row) => {
      const v = row[idx]

      if (sym === '+') return acc + v
      if (sym === '*') return acc * v
    }, sym === '*' ? 1 : 0)
  , 0)

  return sum
}