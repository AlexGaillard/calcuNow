const calculator = document.getElementById('calculator');
const keys = calculator.querySelector('.keys');
const display = calculator.querySelector('.display');

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target;
    console.log(key)
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;

    Array.from(key.parentNode.children).forEach(k => k.classList.remove('active'));

    const calculate = (n1, operator, n2) => {
      let result = '';

      if (operator === 'add') result = parseFloat(n1) + parseFloat(n2)
      else if (operator === 'subtract') result = parseFloat(n1) - parseFloat(n2)
      else if (operator === 'multiply') result = parseFloat(n1) * parseFloat(n2)
      else if (operator === 'divide') result = parseFloat(n1) / parseFloat(n2);

      return result;
    }

    if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide'
      ) {
        key.classList.add('active');
        calculator.dataset.previousKeyType = 'operator';
        calculator.dataset.firstValue = displayedNum;
        calculator.dataset.operator = action;
        console.log(calculator.dataset)
    };

    const previousKeyType = calculator.dataset.previousKeyType;

    if (!action) {
      if (displayedNum === '0' || previousKeyType === 'operator') display.textContent = keyContent
      else display.textContent = displayedNum + keyContent;
      calculator.dataset.previousKeyType = 'number';
    };

    if (action === 'clear') {
      calculator.dataset.previousKeyType = 'claer';
    };

    if (action === 'equals') {
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;

      display.textContent = calculate(firstValue, operator, secondValue);
      calculator.dataset.previousKeyType = 'equals';
    };

    if (action === 'decimal') {
      if (!displayedNum.includes('.')) display.textContent = displayedNum + '.'
      else if (previousKeyType === 'operator') display.textContent = '0.';

      calculator.dataset.previousKeyType = 'decimal';
    };

  }
})