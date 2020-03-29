const resize = (expected, given) => {
  let actual = {};
  let divisor;
  if (given.width < given.height) {
    divisor = Math.floor(given.height / expected.height);
  } else {
    divisor = Math.floor(given.width / expected.width);
  }
  actual.width = given.width / divisor;
  actual.height = given.height / divisor;
  return actual;
}

export default resize;
