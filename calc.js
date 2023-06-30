// node server.js sum 100 50 25
// node server.js sub 100 50 25
// node server.js mult 100 5 2
// node server.js div 100 50 2

const [operation, ...rest] = process.argv.slice(2);
const numbers = rest.map(el => Number(el));

const res = (operation, numbers) => {
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

console.log(res(operation, numbers));
