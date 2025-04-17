const p = document.querySelector('.show-classdemo');
console.log('p', p);

function showClassDemo(item) {
  switch (item) {
    case 'w01_dom_10':
      p.innerHTML = `<iframe src='./demo/w01_dom_10/index.html' width='100%' height='100%' />`;
      break;
    case 'w02_dom_10':
      p.innerHTML = `<iframe src='./demo/w02_dom_10/index.html' width='100%' height='100%' />`;
      break;
    case 'w03_tictactoe_10':
      p.innerHTML = `<iframe src='./demo/w03_tictactoe_10/tictactoe_10.html' width="100%" height="100%" />`;
      break;
    case 'w03_p1_10':
      p.innerHTML = `<iframe src='./demo/w03_basics_10/p1_10/p1_10.html' width="100%" height="100%" />`;
      break;
    case 'w04_p2_10':
      p.innerHTML = `<iframe src='./demo/w04_basics_10/p2_10/p2_10.html' width="100%" height="100%" />`;
      break;
    case 'w04_p2_10':
      p.innerHTML = `<iframe src='./demo/w04_basics_10/p2_10/p2_10.html' width="100%" height="100%" />`;
      break;
  }
}

function showQuiz1(item) {
  switch (item) {
    case 'p1_10':
      p.innerHTML = `<iframe src='./exams/quiz1_10/p1_10/src/p1_10.html' width='100%' height='100%' />`;
      break;
    case 'p2_10':
      p.innerHTML = `<iframe src='./exams/quiz1_10/p2_10/src/p2_10.html' width='100%' height='100%' />`;
      break;
    case 'p3_10':
      p.innerHTML = `<iframe src='./exams/quiz1_10/p3_10/p3_10.html' width="100%" height="100%" />`;
      break;
    case 'p4_10':
      p.innerHTML = `<iframe src='./exams/quiz1_10/p4_10/p4_10.html' width="100%" height="100%" />`;
      break;
  }
}

function showMIDTERM(item) {
  switch (item) {
    case 'm1_10':
      p.innerHTML = `<iframe src='./exams/mid1_10/m1_10/src/p1_10.html' width='100%' height='100%' />`;
      break;
    case 'm2_10':
      p.innerHTML = `<iframe src='./exams/mid1_10/m2_10/p2_10.html' width='100%' height='100%' />`;
      break;
    case 'm3_10':
      p.innerHTML = `<iframe src='./exams/mid1_10/m3_10/p3_10.html' width="100%" height="100%" />`;
      break;
  }
}
