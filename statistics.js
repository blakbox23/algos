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
  let sum=0;
  if(arr.length === i){
    return 0;
  }
  sum += arr[i] + sumRecursion(arr, i+1)
  return sum
};


//Product of all elements
const prod =(array)=>{
  let product = 1;
  for(let i=0; i<array.length; i++){
    product *= array[i]
  }
  return product
}

const prodReduce =(array)=>{
  return array.reduce((a,b)=> a*b)
}

const prodRecursion = ()=>{
  
}

//mean value

//median value

//Root mean square

//Product of all elemtns divided by the factorial of number of elements

console.log(prodReduce([2, 2, 3], 0));
// countDownRecursion(9);
