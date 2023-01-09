function sumLargestNumbers(numbers) {
  // sort the array in descending order
  numbers.sort(function(a, b) {
    return b - a;
  });
  // return the sum of the first two elements
  return numbers[0] + numbers[1];
}
console.log(sumLargestNumbers([1, 2, 3])); // 5 (3 + 2)
console.log(sumLargestNumbers([10, 20, 30, 40, 50])); // 70 (50 + 20)
console.log(sumLargestNumbers([-10, -20, -30, -40, -50])); // -30 (-30 + -40)
