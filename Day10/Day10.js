function getStatistics(numbers) {
    let statistics = {};
  
    // Mean
    let sum = numbers.reduce((a, b) => a + b, 0);
    statistics.mean = sum / numbers.length;
  
    // Median
    numbers.sort((a, b) => a - b);
    if (numbers.length % 2 === 0) {
      statistics.median = (numbers[numbers.length / 2 - 1] + numbers[numbers.length / 2]) / 2;
    } else {
      statistics.median = numbers[Math.floor(numbers.length / 2)];
    }
  
    // Mode
    let counts = {};
    let maxCount = 0;
    let mode = -1;
    for (let i = 0; i < numbers.length; i++) {
      if (counts[numbers[i]] === undefined) {
        counts[numbers[i]] = 1;
      } else {
        counts[numbers[i]]++;
      }
      if (counts[numbers[i]] > maxCount) {
        maxCount = counts[numbers[i]];
        mode = numbers[i];
      }
    }
    statistics.mode = mode;
  
    return statistics;
  }
  console.log(getStatistics([1,2,3,4,5,6,7,8,9,10]));
  
  console.log(getStatistics([1,1,2,3,4,5,5,5,6,7,8,9,10]));
  
    