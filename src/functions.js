const capitalize = (string) => {
  return `${string[0].toUpperCase()}${string.slice(1)}`;
};

const reverse = (string) => {
  if (string === "") {
    return string;
  // eslint-disable-next-line no-else-return
  } else {
    return string.charAt(string.length - 1) + reverse(string.slice(0, -1));
  }
};

module.exports = {
    capitalize,
    reverse,
}