module.exports = (data) => {
  const lines = data.trim().split('\n')

  const input = lines.map(l => {
    const [, indicators, wirings,] = l.match(/^\[(.*?)\]\s*(.*?)\s*\{(.*?)\}$/)

    return {
      indicators: indicators.split('').map(v => v === '#'),
      wirings: wirings.split(' ').map(w => w.slice(1, -1).split(',').map(Number))
    }
  }).map(v => {
    let maskIndicator = 0
    for (let i = 0; i < v.indicators.length; i++) {
      if (v.indicators[i]) maskIndicator |= (1 << v.indicators.length - 1 - i)
    }

    const maskWiringsList = v.wirings.map(w => w.reduce((acc, cur) => acc | (1 << (v.indicators.length - 1 - cur)), 0))
    
    return {
      indicators: maskIndicator,
      wirings: maskWiringsList
    }
  })

  const res = input.map(i => {
    let best = null

    for (let mask = 0; mask < (1 << i.wirings.length); mask++) {
      let acc = 0
      const used = []

      for (let bit = 0; bit < i.wirings.length; bit++) {
        if (mask & (1 << bit)) {
          acc ^= i.wirings[bit]
          used.push(bit)
        }
      }
      
      if (acc === i.indicators) {
        if (!best || used.length < best.length) {
          best = used
        }
      }
    }
    
    return best
  }).reduce((a, b) => a + b.length, 0)

  return res
}