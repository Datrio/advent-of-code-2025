module.exports = (data) => {
  const lines = data.trim().split('\n').map(l => l.split(',').map(Number))

  let maxArea = 0

  lines.forEach(([x, y]) => {
    lines.forEach(([x2, y2]) => {
      const area = (Math.abs(y2 - y) + 1) * (Math.abs(x2 - x) + 1)

      maxArea = maxArea < area ? area : maxArea
    })
  })

  return maxArea
}