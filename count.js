//positive integers
const positive = (array) => {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      count++;
    }
  }
  return count;
};

//positive integers
const negative = (array) => {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      count++;
    }
  }
  return count;
};

//prime numbers
const prime = (array) => {
  let nonPrimes = [];
  for (let i = 0; i < array.length; i++) {
    let val = array[i];
    for (j = 2; j < val; j++) {
      if (val % j == 0) {
        nonPrimes.push(val);
      }
    }
  }
  return array.filter((v) => !nonPrimes.includes(v)).length;
};

//odd numbers
//even numbers

console.log(
  prime([2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 11, 14, 15, 16, 18, 17, 20])
);
