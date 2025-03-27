import { sdata } from './data_10.js'
// console.log('sdata', sdata)

const results1 = document.querySelector('.results1')
const results2 = document.querySelector('.results2')

const computePass = (s) => {
  let pass = 0
  s.forEach((score) => {
    if (score >= 59.5) pass++
  })
  return pass
}

const computeFail = (s) => {
  let Fail = 0
  s.forEach((score) => {
    if (score < 59.5) Fail++
  })
  return Fail
}

const computeHighest = (s) => {
  let Highest = -10000
  s.forEach((score) => {
    if (score > Highest) Highest = score
  })
  return Highest
}

const computeLowest = (s) => {
  let Lowest = 200
  s.forEach((score) => {
    if (score < Lowest) Lowest = score
  })
  return Lowest
}

const computeAverage = (s) => {
  let sum = 0
  s.forEach((score) => {
    sum += score
  })
  return sum / s.length
}

const outputStat1 = (s) => {
  results1.innerHTML = `
    <h3 class='my-4'>Array statistics </h3>
    <p>sdata original: </p>
    <p>${JSON.stringify(s)}</p>
    <p>Total: ${s.length}</p>
    <p>Pass: ${computePass(s)}</p>
    <p>Fail: ${computeFail(s)}</p>
    <p>Highest: ${computeHighest(s)}</p>
    <p>Lowest: ${computeLowest(s)}</p>
    <p>Average: ${computeAverage(s).toFixed(1)}</p>
  `
}

// sdata.push(85)

outputStat1(sdata)

const toSorted = sdata.toSorted(function (a, b) {
  return b - a
})
console.log('sdata after sorting', sdata)
console.log('sdata after sorting', toSorted)

let stat = {
  pass: 0,
  fail: 0,
  sum: 0,
  average: 0,
}

const outputStat2 = (s) => {
  results1.innerHTML = `
    <h3 class='my-4'>Array statistics </h3>
    <p>sdata original: </p>
    <p>${JSON.stringify(s)}</p>
    <p>Total: ${s.length}</p>
    <p>Pass: ${stat.pass}</p>
    <p>Fail: ${stat.fail}</p>
    <p>Highest: ${s[0]}</p>
    <p>Lowest: ${s[s.length - 1]}</p>
    <p>Average: ${computeAverage(s).toFixed(1)}</p>
  `
}

const computeStat = (s) => {
  s.forEach((score) => {
    if (score > 59.5) stat.pass++
    else stat.fail++
    stat.sum += score
    stat.average = stat.sum / s.length
  })
}

computeStat(toSorted)
outputStat2(toSorted)
