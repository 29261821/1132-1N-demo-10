const p = document.querySelector('.show-classdemo')
console.log('p', p)

function showClassDemo(item) {
  switch (item) {
    case 'w01_dom_10':
      p.innerHTML = `<iframe src='./demo/w01_dom_10/index.html' width='100%' height='100%' />`
      break
    case 'w02_dom_10':
      p.innerHTML = `<iframe src='./demo/w02_dom_10/index.html' width='100%' height='100%' />`
      break
    case 'w03_tictactoe_10':
      p.innerHTML = `<iframe src='./demo/w03_tictactoe_10/tictactoe_10.html' width="100%" height="100%" />`
      break
    case 'w03_p1_10':
      p.innerHTML = `<iframe src='./demo/w03_basics_10/p1_10/p1_10.html' width="100%" height="100%" />`
      break
    case 'w04_p2_10':
      p.innerHTML = `<iframe src='./demo/w04_basics_10/p2_10/p2_10.html' width="100%" height="100%" />`
      break
  }
}
