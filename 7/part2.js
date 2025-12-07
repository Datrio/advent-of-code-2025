module.exports = (data) => {
  const lines = data.trim().split('\n')

  const fullLines = lines.filter(line => !line.match(/^[.]+$/g))

  const activeTachyons = {}
  activeTachyons[fullLines.shift().indexOf('S')] = 1

  fullLines.forEach(line => {
    let idx = -1

    while ((idx = line.indexOf('^', idx + 1)) !== -1) {
      if (activeTachyons[idx]) {
        activeTachyons[idx - 1] = (activeTachyons[idx - 1] || 0) + activeTachyons[idx]
        activeTachyons[idx + 1] = (activeTachyons[idx + 1] || 0) + activeTachyons[idx]

        delete activeTachyons[idx]
      }
    }
  })

  const splits = Object.values(activeTachyons).reduce((a, b) => a + b, 0)

  return splits
}