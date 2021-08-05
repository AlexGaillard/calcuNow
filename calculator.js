import('./domMethods.js')

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