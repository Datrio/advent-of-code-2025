module.exports = (data) => {
  const lines = data.trim().split('\n').map(l => l.split(',').map(Number))

  /*
  const yOnX = {}
  const xOnY = {}

  for (const [x, y] of lines) {
    if (!yOnX[x]) yOnX[x] = []
    yOnX[x].push(y)

    if (!xOnY[y]) xOnY[y] = []
    xOnY[y].push(x)
  }

  Object.values(yOnX).forEach(ys => ys.sort((a, b) => a - b))
  Object.values(xOnY).forEach(xs => xs.sort((a, b) => a - b))

  const rectangleAreas = []

  lines.forEach(([x, y]) => {
    const ys = yOnX[x]
    const xs = xOnY[y]

    ys.forEach(yv => {
      xs.forEach(xv => {
        console.log(`Rectangle corner at (${x},${y}) to (${xv},${yv})`)
        rectangleAreas.push(Math.abs(yv - y) * Math.abs(xv - x))
      })
    })
  })

  console.log(rectangleAreas)
  */
  return
}