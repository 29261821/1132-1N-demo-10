const o = 'o'
const x = 'x'
let turn = 0
let done = false

const container = document.querySelector('.container')
const alert = document.querySelector('.alert')
const allLi = document.querySelectorAll('.board li')
const resetBtn = document.querySelector('.reset')
console.log('allLi', allLi)
console.log('container', container)

const winMessage = (player) => {
  if (player === 'o') {
    container.style.backgroundColor = 'rgba(144,238,144,0.5)'
    alert.style.backgroundColor = 'rgba(144,238,144,0.5)'
    alert.style.color = 'green'
    alert.style.display = 'block'
    alert.textContent = 'player o wins'
  } else {
    container.style.backgroundColor = 'rgba(240,118,128,0.726)'
    alert.style.backgroundColor = 'rgba(240,118,128,0.726)'
    alert.style.color = 'purple'
    alert.style.display = 'block'
    alert.textContent = 'plyer x wins'
  }
}

const tieMessage = () => {
  alert.style.backgroundColor = '#888'
  alert.style.color = '#ddd'
  alert.style.display = 'block'
  alert.textContent = 'tie'
}

//tieMessage()

winMessage('o')

const reset = () => {
  alert.style.display = 'none'
  container.style.backgroundColor = '#666'
  allLi.forEach((item) => {
    item.textContent = '+'
    item.classList = ''
  })
}

resetBtn.addEventListener('click', reset)

/*
      <ul class="board">
        <li>+</li>
        <li>+</li>
        <li>+</li>
        <li>+</li>
        <li>+</li>
        <li>+</li>
        <li>+</li>
        <li>+</li>
        <li>+</li>
      </ul>

      */

/*      <ul class="board">
        <li class="o">o</li>
        <li>+</li>
        <li class="x">x</li>
        <li class="o">o</li>
        <li class="x">x</li>
        <li class="x">x</li>
        <li class="o">o</li>
        <li>+</li>
        <li class="o">+</li>
        */

// 綁定事件"圈"
addBtn.addEventListener('click', () => compute('o disabled'))
// 綁定事件"叉"
subtractBtn.addEventListener('click', () => compute('x disabled'))
