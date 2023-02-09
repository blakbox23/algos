//sort arrays then pick the one at whatever end you need
//sort array then pick the one at index of what you need (K)
const largest = (array) => {
  array.sort((a, b) => a - b);
  console.log(array);
  console.log(`Smallest is ${array[0]}`);
  console.log(`Largest is ${array[array.length - 1]}`);
  console.log(`Third smallest ${array[2]}`);
  console.log(`Third Largest ${array[array.length - 3]}`);
  return "End of largest/smallest";
};
console.log(largest([5, 1, 3, 6, 7, 45]));

