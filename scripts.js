// operators
let counter = document.getElementById('counter');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let times = document.getElementById('times');
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
equals.addEventListener('mousedown', () => { calc.equals(); });
clear.addEventListener('mousedown', () => { calc.clear(); });

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('mousedown', () => { calc.change(numbers[i].value) });
}

class calculator {
  constructor() {
    this.value = '0';
    this.sum = 0;
    this.previous;
  }

  add() {
    this.sum += Number(this.value);
    this.previous = this.add;
    this.clear();
  }

  subtract() {
    alert('subtract')
  }

  multiply() {
    alert('multiply')
  }

  equals() {
    this.previous();
    counter.innerText = this.sum.toString();
  }

  change(value) {
    if (this.value === '0') this.value = value
    else this.value += value;
    counter.innerText = this.value;
  }

  clear() {
    this.value = '0';
    counter.innerText = this.value;
  }

}

let calc = new calculator;