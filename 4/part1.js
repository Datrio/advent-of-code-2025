module.exports = (data) => {
  const lines = data.trim().split('\n')

  let cratesAround = 0
  let accessableCrates = 0

  for (let y = 0; y < lines.length; y++) {
    for (let x = 0; x < lines[y].length; x++) {
      if (lines[y][x] === '.') continue

      cratesAround = 0

      // check around
      if (lines?.[y - 1]?.[x - 1] === '@') cratesAround++
      if (lines?.[y - 1]?.[x] === '@') cratesAround++
      if (lines?.[y - 1]?.[x + 1] === '@') cratesAround++
      if (lines?.[y]?.[x - 1] === '@') cratesAround++
      if (lines?.[y]?.[x + 1] === '@') cratesAround++
      if (lines?.[y + 1]?.[x - 1] === '@') cratesAround++
      if (lines?.[y + 1]?.[x] === '@') cratesAround++
      if (lines?.[y + 1]?.[x + 1] === '@') cratesAround++

      if (cratesAround < 4) {
        accessableCrates++
      }
    }
  }

  return accessableCrates
}