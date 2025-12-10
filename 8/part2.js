module.exports = (data) => {
  const lines = data.trim().split('\n').sort().map(l => l.split(',').map(Number))

  const distances = []
  const clusters = []
  const pointsInCluster = {}
  let clusterId = 0

  lines.forEach(l1 => {
    lines.forEach(l2 => {
      if (l1 === l2) {
        distances.push(Infinity)
        return
      }

      const dist = Math.pow(l2[0] - l1[0], 2) + Math.pow(l2[1] - l1[1], 2) + Math.pow(l2[2] - l1[2], 2)
      distances.push(dist)
    })
  })

  while(true) {
    const minDist = distances.reduce((a, b) => (a < b ? a : b), Infinity)
    const index = distances.indexOf(minDist)
    distances[index] = Infinity
    const index2 = distances.indexOf(minDist, index + 1)
    distances[index2] = Infinity

    const p1 = lines[Math.floor(index / lines.length)]
    const l1 = p1.join(',')
    const p2 = lines[index % lines.length]
    const l2 = p2.join(',')

    if (pointsInCluster[l1]) {
      if (!pointsInCluster[l2]) {
        clusters[pointsInCluster[l1]].push(l2)
        pointsInCluster[l2] = pointsInCluster[l1]

        if (clusters[pointsInCluster[l1]].length === lines.length) {
          return p1[0] * p2[0]
        }
      } else {
        const cluster1 = pointsInCluster[l1]
        const cluster2 = pointsInCluster[l2]
        if (cluster1 !== cluster2) {
          clusters[cluster1].push(...clusters[cluster2])
          
          clusters[cluster2].forEach(k => {
            pointsInCluster[k] = cluster1
          })

          delete clusters[cluster2]

          if (clusters[cluster1].length === lines.length) {
            return p1[0] * p2[0]
          }
        }
      }
    } else if (pointsInCluster[l2]) {
      clusters[pointsInCluster[l2]].push(l1)
      pointsInCluster[l1] = pointsInCluster[l2]

      if (clusters[pointsInCluster[l2]].length === lines.length) {
        return p1[0] * p2[0]
      }
    } else {
      clusters[clusterId] = [l1, l2]
      pointsInCluster[l1] = clusterId
      pointsInCluster[l2] = clusterId
      clusterId++
    }
  }
}
