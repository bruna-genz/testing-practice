const capitalize = (string) => `${string[0].toUpperCase()}${string.slice(1)}`;

const reverse = (string) => {
  if (string === '') {
    return string;
  // eslint-disable-next-line no-else-return
  } else {
    return string.charAt(string.length - 1) + reverse(string.slice(0, -1));
  }
};

const calculator = {
  sum: (x1, x2) => x1 + x2,
  subs: (x1, x2) => x1 - x2,
  mult: (x1, x2) => x1 * x2,
  div: (x1, x2) => x1 / x2,
};

const applyCipherFormula = (char, key, array) => {
  const index = array.indexOf(char);
  return array[(index + key) % 26];
};

const cipher = (string, key) => {
  const lowerAlph = [...'abcdefghijklmnopqrstuvwxyz'];
  const upperAlph = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

  const plainArray = [...string];
  const cipher = [];

  plainArray.forEach((char) => {
    if (lowerAlph.includes(char)) {
      cipher.push(applyCipherFormula(char, key, lowerAlph));
    } else if (upperAlph.includes(char)) {
      cipher.push(applyCipherFormula(char, key, upperAlph));
    } else {
      cipher.push(char);
    }
  });

  return cipher.join('');
};

const analyze = (array) => {
  const results = {
    average: array.reduce((x, y) => x + y) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };

  return results;
};

export {
  capitalize, reverse, calculator, cipher, analyze,
};