const calculateData = (operation, numbers) => {
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

module.exports = calculateData;
