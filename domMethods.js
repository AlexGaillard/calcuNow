const calculator = document.getElementById('calculator');
const keys = calculator.querySelector('.keys');
const display = calculator.querySelector('.display');

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;

    Array.from(key.parentNode.children).forEach(k => k.classList.remove('active'));

    if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide'
      ) {
      key.classList.add('active');
      calculator.dataset.previousKeyType = 'operator';
    };

    if (action === 'clear') {
      console.log('clear key')
    };

    if (action === 'equals') {
      const secondValue = displayedNum;
    };

    if (action === 'decimal') {
      display.textContent = displayedNum + '.';
    };

    const previousKeyType = calculator.dataset.previousKeyType;

    if (!action) {
      if (displayedNum === '0' || previousKeyType === 'operator') display.textContent = keyContent
      else display.textContent += keyContent;
    };

  }
})