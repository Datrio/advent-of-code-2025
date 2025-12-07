module.exports = (data) => {
  const lines = data.trim().split(',')

  let sum = 0

  lines.forEach(l => {
    const [from, to] = l.split('-').map(Number)
    
    for (let i = from; i <= to; i++) {
      const nString = i.toString()
      
      if (nString.length % 2 !== 0) continue
      
      let strLength = nString.length/2
      
      if (nString.slice(0, strLength) === nString.slice(strLength)) {
        sum += i
      }
    }
  })

  return sum
}