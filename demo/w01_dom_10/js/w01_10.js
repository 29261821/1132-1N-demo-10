const userInput = document.querySelector('.input-number')
const addBtn = document.querySelector('.btn-add')
const subtractBtn = document.querySelector('.btn-subtract')
const multiplyBtn = document.querySelector('.btn-multiply')
const divideBtn = document.querySelector('.btn-divide')

const currentResultOutput = document.querySelector('.current-result')
const currentCalculationOutput = document.querySelector('.current-calculation')

const defaultResult = 0
let currentResult = defaultResult

console.log('userInput', userInput)
console.log('addBtn', addBtn)
console.log('currentResultOutput', currentResultOutput)
console.log('currentCalculationOutput', currentCalculationOutput)

function getUserInput() {
  return parseFloat(userInput.value) || 0 // ✅ 避免 NaN
}
function outputResult(result, text) {
  currentResultOutput.textContent = result
  currentCalculationOutput.textContent = text
}

function add() {
  const operand1 = parseFloat(currentResult)
  const operand2 = getUserInput()
  currentResult = parseFloat((operand1 + operand2).toFixed(2))
  //currentResultOutput.textContent = currentResult
  const calText = `${operand1} + ${operand2}`
  console.log(`${calText} = ${currentResult}`)
  //currentCalculationOutput.textContent = calText
  outputResult(currentResult, calText)
}
// 綁定事件
addBtn.addEventListener('click', add)

function subtract() {
  const operand1 = parseFloat(currentResult)
  const operand2 = getUserInput()
  currentResult = parseFloat((operand1 - operand2).toFixed(2))
  currentResultOutput.textContent = currentResult
  const calText = `${operand1} - ${operand2}`
  console.log('calText', calText)
  currentCalculationOutput.textContent = calText
}
// 綁定事件
subtractBtn.addEventListener('click', subtract)

function multiply() {
  const operand1 = parseFloat(currentResult)
  const operand2 = getUserInput()
  currentResult = parseFloat((operand1 * operand2).toFixed(2))
  currentResultOutput.textContent = currentResult
  const calText = `${operand1} * ${operand2}`
  console.log('calText', calText)
  currentCalculationOutput.textContent = calText
}
// 綁定事件
multiplyBtn.addEventListener('click', multiply)

function divide() {
  const operand1 = parseFloat(currentResult)
  const operand2 = getUserInput()
  if (operand2 === 0) alert('cannot divide by 0')
  else {
    currentResult = parseFloat((operand1 / operand2).toFixed(2))
    //currentResultOutput.textContent = currentResult
    const calText = `${operand1} / ${operand2}`
    console.log(`${calText} = ${currentResult}`)
    //currentCalculationOutput.textContent = calText
    outputResult(currentResult, calText)
  }
}
// 綁定事件
divideBtn.addEventListener('click', divide)
