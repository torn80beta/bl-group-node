class Calculator {
  constructor(operation, numbers) {
    this.operation = operation;
    this.numbers = numbers;
  }

  res = (operation, numbers) => {
    switch (operation) {
      case 'sum':
        return numbers.reduce((acc, el) => acc + el);
      case 'sub':
        return numbers.reduce((acc, el) => acc - el);
      case 'mult':
        return numbers.reduce((acc, el) => acc * el);
      case 'div':
        return numbers.reduce((acc, el) => acc / el);

      default:
        return 'No such operation :(';
    }
  };

  init = () => {
    return this.res(this.operation, this.numbers);
  };
}

const [operation, ...rest] = process.argv.slice(2);
const numbers = rest.map(el => Number(el));

module.exports = new Calculator(operation, numbers);
