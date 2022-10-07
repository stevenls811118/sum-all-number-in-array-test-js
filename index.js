function sumItems(array) {
  // Sum all the numbers in the array
  let sum = 0;
  array.forEach(i => {
    if (Array.isArray(i)) {
      sum += sumItems(i);
    } else {
      sum += i;
    }
  });
  return sum;
}

module.exports = sumItems;