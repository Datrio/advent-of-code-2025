module.exports = (data) => {
  const [ranges, ] = data.trim().split('\n\n').map(part => part.split('\n'))

  const mergedRanges = []

  ranges
    .map(range => range.split('-').map(Number))
    .sort((a, b) => a[0] - b[0])
    .forEach(([start, end]) => {
      if (mergedRanges.length === 0) {
        mergedRanges.push([start, end])
      } else {
        const lastRange = mergedRanges[mergedRanges.length - 1]

        if (start <= lastRange[1] + 1) {
          // merge ranges
          lastRange[1] = Math.max(lastRange[1], end)
        } else {
          mergedRanges.push([start, end])
        }
      }
    })

  return mergedRanges.reduce((acc, [start, end]) => {
    return acc + (end - start + 1)
  }, 0)

  /* Doesn't work, too slow:
  const validNumbers = {}

  ranges.forEach(range => {
    const [start, end] = range.split('-').map(Number)

    for (let i = start; i <= end; i++) {
      validNumbers[i] = true
    }
  })

  return Object.keys(validNumbers).length
  */
}