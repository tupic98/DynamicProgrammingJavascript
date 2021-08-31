// Write a function fib(n) that takes in a number as an argument.
// The function should return the n-th number of the fibonacci sequence.
// The 1st and 2nd number of the sequence is 1.
// To generate the next number of the sequence, we sum the previous two.


// Not optimized recursive fibonacci
//
// O(2^n) time
// O(n) space
const recursiveFib = (n) => {
  // Here we hit our base cases. Both for n = 1 and n = 2
  if (n <= 2) return 1;
  // Here we return the sum of the previous two numbers, in a revursive way
  return recursiveFib(n - 1) + recursiveFib(n - 2);
}

console.log(recursiveFib(3));
console.log(recursiveFib(5));
console.log(recursiveFib(8));
// This one is going to take a looooot of time. 
// console.log(recursiveFib(50));

// Optimized fibonacci with Dynamic Programming (DP)
// Optimized fibonacci in this cases uses a JS Object as a data structure to store the repeated values
// so when traveling on the tree, we don'r recalculate
//
// O(n) time
// O(n) space
const fib = (n, memo = {}) => {
  // Here we check if we already have the value stored in the memo object. If that is the case we return te stored value
  if (n in memo) return memo[n];
  // Here we hit our base cases. Both for n = 1 and n = 2
  if (n <= 2) return 1;
  // Here we store the sum of the previous two numbers in to the object. Also, we pass the memo object as a param
  // as JS objects work with references, so we are passing the reference, not an actual copy of the object.
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  // returns the sum of the previous two numbers;
  return memo[n];
}

console.log(fib(3));
console.log(fib(5));
console.log(fib(8));
// In this case, because we optimized the function from O(2^n) to O(n), this calculation is *almost* instant;
console.log(fib(50));