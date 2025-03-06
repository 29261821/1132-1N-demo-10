const o = 'o'
const x = 'x'
let turn = 0
let done = false

const container = document.querySelector('.container')
const showAlert = document.querySelector('.alert')
const allLi = document.querySelectorAll('.board li')
const resetBtn = document.querySelector('.reset')
console.log('allLi', allLi)
console.log('container', container)
//console.log(alert)

const checkWin = (player) => {
  let p = []
  allLi.forEach((item) => {
    p.push(item.classList.contains(player))
  })
  //console.log('p', p)
  const [p1, p2, p3, p4, p5, p6, p7, p8, p9] = p
  if (
    (p1 && p2 && p3) ||
    (p4 && p5 && p6) ||
    (p7 && p8 && p9) ||
    (p1 && p4 && p7) ||
    (p2 && p5 && p8) ||
    (p3 && p6 && p9) ||
    (p1 && p5 && p9) ||
    (p3 && p5 && p7)
  )
    return true
  else return false
}

const winMessage = (player) => {
  if (player === 'o') {
    container.style.backgroundColor = 'rgba(144,238,144,0.5)'
    showAlert.style.backgroundColor = 'rgba(144,238,144,0.5)'
    showAlert.style.color = 'green'
    showAlert.style.display = 'block'
    showAlert.textContent = 'player o wins'
  } else {
    container.style.backgroundColor = 'rgba(240,118,128,0.726)'
    showAlert.style.backgroundColor = 'rgba(240,118,128,0.726)'
    showAlert.style.color = 'purple'
    showAlert.style.display = 'block'
    showAlert.textContent = 'player x wins'
  }
}

const tieMessage = () => {
  showAlert.style.backgroundColor = '#888'
  showAlert.style.color = '#ddd'
  showAlert.style.display = 'block'
  showAlert.textContent = 'tie'
}

//console.log(`checkWin("o")`, checkWin('o'))
//console.log(`checkWin("x")`, checkWin('x'))

const reset = () => {
  showAlert.style.display = 'none'
  container.style.backgroundColor = '#666'
  allLi.forEach((item) => {
    item.textContent = '+'
    item.classList = ''
  })
  turn = 0
  done = false
  showAlert.style.display = 'none'
}

const go = (item, player, text) => {
  item.textContent = text
  item.classList.add(player, 'disabled')
  if (checkWin(player)) {
    winMessage(player)
    done = true
  }
}

allLi.forEach((item) => {
  item.addEventListener('click', () => {
    if (item.classList.contains('disabled')) {
      alert('already filled')
    } else {
      if (turn % 2 === 0) {
        go(item, 'o', 'o')
      } else if (turn % 2 == 1) {
        go(item, 'x', 'x')
      }
      if (!done && turn < 8) turn++
      else if (!done && turn >= 8) tieMessage()
    }
  })
})

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
//addBtn.addEventListener('click', () => compute('o disabled'))
// 綁定事件"叉"
//subtractBtn.addEventListener('click', () => compute('x disabled'))
