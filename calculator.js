import('./domMethods.js')

class calculator {
  constructor() {
    this.current = 0;
    this.total = 0;
    this.numString = '';
    this.previous;
  }

  add() {
    this.previous = this.add;
    this.total += this.current;
    this.current = 0;
    counter.innerHTML = this.current;
  }

  subtract() {
    this.previous = this.subtract;
    this.total -= this.current;
    this.current = 0;
    counter.innerHTML = this.current;
  }

  multiply() {

  }

  divide() {

  }

  equals() {
    this.previous();
    counter.innerHTML = this.total;
  }

  change(value) {
    if (this.current === 0) this.numString = value
    else this.numString += value;
    this.current = Number(this.numString);
    counter.innerHTML = this.numString;
  }

  clear() {

  }

  reset() {

  }

}

let calc = new calculator;