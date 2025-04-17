const calculateBtn = document.querySelector('.calculate');
const bmiResult = document.querySelector('.show-result');

const suggest = document.querySelector('.give-suggestion');

function bmiCalc_10(height, weight) {
  return weight / (height * height);
}

function bmi_normal_low(height) {
  return height * height * 18.5;
}

function bmi_normal_high(height) {
  return height * height * 24;
}

function calculateBMI() {
  const weight = parseFloat(document.querySelector('.weight').value);
  const height = parseFloat(document.querySelector('.height').value) / 100;

  const bmi = bmiCalc_10(height, weight);
  const normal_low = bmi_normal_low(height);
  const normal_high = bmi_normal_high(height);

  let status;
  let suggestion;

  if (bmi < 18.5) {
    status = `Your BMI is ${bmiCalc_10(height, weight).toFixed(
      1
    )}. underweight`;
    suggestion = `add at least ${(bmi_normal_low(height) - weight).toFixed(
      1
    )} Kg to normal `;
  } else if (bmi <= 24) {
    status = `Your BMI is ${bmiCalc_10(height, weight).toFixed(1)}. normal`;
    suggestion = '';
  } else {
    status = `Your BMI is ${bmiCalc_10(height, weight).toFixed(1)}. overweight`;
    suggestion = `reduce at least ${(weight - bmi_normal_high(height)).toFixed(
      1
    )} Kg to normal`;
  }

  bmiResult.innerHTML = `${status}`;
  suggest.innerHTML = `${suggestion}`;
}

calculateBtn.addEventListener('click', calculateBMI);
