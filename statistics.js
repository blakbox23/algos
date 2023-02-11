//given an array of numbers find the

//sum of all elements
const sum = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

const sumReduce = (array) => {
  return array.reduce((a, b) => a + b);
};

const sumRecursion = (arr, i) => {
  if(arr.length === i){
    return 0;
  }
  return arr[i] + sumRecursion(arr, i+1)
};

const countDownRecursion = (n) => {
  console.log(n);
  if (n > 0) {
    countDownRecursion(n - 1);
  }
};

//Product of all elements

//mean value

//median value

//Root mean square

//Product of all elemtns divided by the factorial of number of elements

console.log(sumRecursion([2, 2, 3], 0));
// countDownRecursion(9);
