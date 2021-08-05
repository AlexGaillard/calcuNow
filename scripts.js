// operators
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let times = document.getElementById('times');
let equals = document.getElementById('equals');

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

//event listeners
plus.addEventListener('mousedown', () => { calc.add(); });
minus.addEventListener('mousedown', () => { calc.subtract(); });
times.addEventListener('mousedown', () => { calc.multiply(); });
equals.addEventListener('mousedown', () => { calc.equals(); });

class calculator {

  add() {
    alert('add')
  }

  subtract() {
    alert('subtract')
  }

  multiply() {
    alert('multiply')
  }

  equals() {
    alert('equals')
  }

}

let calc = new calculator;