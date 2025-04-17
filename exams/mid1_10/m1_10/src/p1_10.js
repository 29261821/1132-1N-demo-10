let h1 = 1.75,
  w1 = 55;
let h2 = 1.75,
  w2 = 70;
let h3 = 1.75,
  w3 = 85;

const result1 = document.querySelector('.result1');
const result2 = document.querySelector('.result2');
const result3 = document.querySelector('.result3');

function bmiCalc_10(height, weight) {
  return weight / (height * height);
}

// const bmi1 = bmiCalc_10(height, weight);

/*result1.textContent = `BMI = ${(w1 / (h1 * h1)).toFixed(
  1
)}, (h.w) = (${h1},${w1})`;*/

result1.textContent = `BMI = ${bmiCalc_10(h1, w1).toFixed(
  1
)}, (h.w) = (${h1},${w1})`;

// console.log('bmi1', bmi1);

result2.textContent = `BMI = ${bmiCalc_10(h2, w2).toFixed(
  1
)}, (h.w) = (${h2},${w2})`;

result3.textContent = `BMI = ${bmiCalc_10(h3, w3).toFixed(
  1
)}, (h.w) = (${h3},${w3})`;
