module.exports = (data) => {
  const lines = data.trim().split('\n')

  const fullLines = lines.filter(line => !line.match(/^[.]+$/g))
  let splits = 0

  const activeTachyons = {}
  activeTachyons[fullLines.shift().indexOf('S')] = true

  fullLines.forEach(line => {
    let idx = -1

    while ((idx = line.indexOf('^', idx + 1)) !== -1) {
      if (activeTachyons[idx]) {
        splits++

        activeTachyons[idx - 1] = true
        activeTachyons[idx + 1] = true
        delete activeTachyons[idx]
      }
    }
  })

  return splits
}