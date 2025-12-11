function progressFlow(arr, index, out, visitedDAC = false, visitedFFT = false, cache = {}) {
  let cacheKey = index + ',' + visitedDAC + ',' + visitedFFT

  if (cache[cacheKey] !== undefined) {
    return cache[cacheKey]
  }

  let total = 0

  arr[index].output.forEach(o => {
    if (o === out) {
      if (visitedDAC && visitedFFT) {
        total += 1
      }

      return
    }

    const childVal = progressFlow(arr, o, out, visitedDAC || o === 'dac', visitedFFT || o === 'fft', cache)
    total += childVal
  })

  cache[cacheKey] = total
    
  return total
}

module.exports = (data) => {
  const lines = data.trim().split('\n').map(l => l.split(': ')).map(([input, b]) => ({ input, output: b.split(' ')}))

  const flow = lines.reduce((acc, cur) => {
    acc[cur.input] = cur
    return acc
  }, {})

  const countTotalOut = progressFlow(flow, 'svr', 'out')
  
  return countTotalOut
}