const display = document.getElementById('display');
const buttons = document.querySelectorAll('.botoes button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    switch (value) {
      case '=':
        try {
          display.value = eval(display.value);
        } catch (error) {
          display.value = 'Erro';
        }
        break;
      case 'C':
        display.value = '';
        break;
      case 'sin':
        display.value = Math.sin(eval(display.value));
        break;
      case 'cos':
        display.value = Math.cos(eval(display.value));
        break;
      case 'tan':
        display.value = Math.tan(eval(display.value));
        break;
      case 'sqrt':
        display.value = Math.sqrt(eval(display.value));
        break;
      case 'log':
        display.value = Math.log10(eval(display.value));
        break;
      case 'pi':
        display.value += Math.PI;
        break;
      case 'e':
        display.value += Math.E;
        break;
      case '^':
        display.value += '**';
        break;
      case '!':
        const factorial = (n) => {
          if (n === 0) return 1;
          return n * factorial(n - 1);
        };
        display.value = factorial(eval(display.value));
        break;
      default:
        display.value += value;
    }
  });
});