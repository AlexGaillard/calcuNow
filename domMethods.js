// operators
let counter = document.getElementById('counter');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let times = document.getElementById('times');
let divide = document.getElementById('divide');
let equals = document.getElementById('equals');
let clear = document.getElementById('clear');

// numbers
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let zero = document.getElementById('zero');
let numbers = document.getElementsByClassName('number');

//event listeners
plus.addEventListener('mouseup', () => { calc.add(); });
minus.addEventListener('mouseup', () => { calc.subtract(); });
times.addEventListener('mouseup', () => { calc.multiply(); });
divide.addEventListener('mouseup', () => { calc.divide(); });
equals.addEventListener('mouseup', () => { calc.equals(); });
clear.addEventListener('mouseup', () => { calc.clear(); });

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('mouseup', () => { calc.change(numbers[i].value) });
}