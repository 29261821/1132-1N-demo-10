//output:20.00 C = 68.00 F

let c, f

c = Number(prompt('Enter a temperature in C: '))
c = c.toFixed(2)
console.log('c', c)
f = (c * 9.0) / 5.0 + 32.0
const output = `${c} C = ${f} F`
const results = document.querySelector('.results')
results.textContent = output
