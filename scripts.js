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
plus.addEventListener('mousedown', () => { calc.add(); });
minus.addEventListener('mousedown', () => { calc.subtract(); });
times.addEventListener('mousedown', () => { calc.multiply(); });
divide.addEventListener('mousedown', () => { calc.divide(); });
equals.addEventListener('mousedown', () => { calc.equals(); });
clear.addEventListener('mousedown', () => { calc.clear(); });

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('mousedown', () => { calc.change(numbers[i].value) });
}

class calculator {
  constructor() {
    this.value = '0';
    this.sum = '';
  }

  add() {
    this.sum += `${this.value} + `;
    counter.innerText = this.sum;
  }

  subtract() {
    this.sum -= Number(this.value);
    this.previous = this.subtract;
    this.clear();
  }

  multiply() {
    if (this.sum === 0) this.sum = 1;
    this.sum *= Number(this.value);
    this.previous = this.multiply;
    this.clear();
  }

  divide() {
    this.sum /= Number(this.value);
    this.previous = this.divide;
    this.clear();
  }

  equals() {
    this.previous();
    counter.innerText = this.sum.toString();
  }

  change(value) {
    this.value += value;
    this.sum += this.value;
    counter.innerText += this.sum;
  }

  clear() {
    this.value = '0';
    counter.innerText = this.value;
  }

}

let calc = new calculator;