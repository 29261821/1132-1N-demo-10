import { students } from './data_10.js'
console.log('students', students)

let stat = {
  pass: 0,
  fail: 0,
  sum: 0,
  average: 0,
  Highest: -100,
  lowest: 200,
}

const results1 = document.querySelector('.results1')
const results2 = document.querySelector('.results2')

const resetStat = () => {
  stat.pass = 0
  stat.fail = 0
  stat.sum = 0
  stat.average = 0
  stat.Highest = -100
  stat.Lowest = 200
}

const computeStat = (s) => {
  resetStat()
  s.forEach((item) => {
    if (item.score > 59.5) stat.pass++
    else stat.fail++
    stat.sum += item.score
    stat.average = stat.sum / s.length
  })
}

const computeHighest = (s) => {
  stat.Highest = -10000
  s.forEach((item) => {
    if (item.score > stat.Highest) stat.Highest = item.score
  })
  return stat.Highest
}

const computeLowest = (s) => {
  stat.lowest = 200
  s.forEach((item) => {
    if (item.score < stat.Lowest) stat.Lowest = item.score
  })
  return stat.Lowest
}

const outputStat = (s, isSort, result) => {
  const resultText = `
    <h3 class='my-4'>Array statistics for ${
      result === 'results1' ? 'results1' : 'results2'
    }
      </h3>
    <p>After sorting descending</p>
    <p>${JSON.stringify(s)}</p>
    <p>Total: ${s.length}</p>
    <p>Pass: ${stat.pass}</p>
    <p>Fail: ${stat.fail}</p>
    <p>Highest: ${isSort === true ? s[0].score : computeHighest(s)}</p>
    <p>Lowest: ${isSort === true ? s[s.length - 1].score : computeLowest(s)}</p>
    <p>Average: ${stat.average.toFixed(1)}</p>
  `

  if (result === 'results1') {
    results1.innerHTML = resultText
  } else if (result === 'results2') {
    results2.innerHTML = resultText
  }
}

// sdata.push(85)

computeStat(students)
outputStat(students, false, 'results1')

const toSorted = students.toSorted(function (a, b) {
  return b.score - a.score
})
console.log('students after sorting', students)
console.log('toSorted', toSorted)

computeStat(toSorted)
outputStat(toSorted, true, 'results2')
