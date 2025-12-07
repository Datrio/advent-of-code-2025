module.exports = (data) => {
  const lines = data.trim().split(',')

  let sum = 0

  const rx = /^(\d+)\1+$/

  lines.forEach(l => {
    const [from, to] = l.split('-').map(Number)
    
    for (let i = from; i <= to; i++) {
      const nString = i.toString()
      
      if (nString.match(rx) === null) continue
      
      sum += i
    }
  })

  return sum
}