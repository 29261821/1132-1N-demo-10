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
  return parseInt(userInput.value) || 0 // ✅ 避免 NaN
}

function add() {
  const operand1 = currentResult
  const operand2 = getUserInput()
  currentResult = operand1 + operand2
  currentResultOutput.textContent = currentResult
  const calText = `${operand1} + ${operand2}`
  console.log('calText', calText)
  currentCalculationOutput.textContent = calText
}

// 綁定事件
addBtn.addEventListener('click', add)
