const calculator = document.getElementById('calculator');
const keys = calculator.querySelector('#keys');

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target;
    const action = key.dataset.action;

    if (!action) {
      console.log('number key')
    }

    if (
      action === 'clear' ||
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide' ||
      action === 'equals'
      ) {
      console.log('operator key')
    }

  }
})