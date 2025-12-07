module.exports = (data) => {
  const [ranges, ids] = data.split('\n\n').map(part => part.split('\n'))

  const isValid = (id) => {
    for (let range of ranges) {
      const [start, end] = range.split('-').map(Number)

      if (id >= start && id <= end) {
        return true
      }
    }

    return false
  }

  return ids.map(Number).filter(id => isValid(id)).length

  /* Doesn't work, too slow:
  const validNumbers = {}

  ranges.forEach(range => {
    const [start, end] = range.split('-').map(Number)

    for (let i = start; i <= end; i++) {
      validNumbers[i] = true
    }
  })

  return ids.map(Number).filter(id => validNumbers[id]).length
  */
}