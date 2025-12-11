function progressFlow(arr, index, current) {
  if (arr[index]) {
    arr[index].output.forEach(o => {
      if (o === 'out') {
        current += 1
        return
      } else {
        current += progressFlow(arr, o, 0)
      }
    })
  }
    
  return current
}

module.exports = (data) => {
  const lines = data.trim().split('\n').map(l => l.split(': ')).map(([input, b]) => ({ input, output: b.split(' ')}))

  const flow = lines.reduce((acc, cur) => {
    acc[cur.input] = cur
    return acc
  }, {})

  const countTotalOut = progressFlow(flow, 'you', 0)
  
  return countTotalOut
}