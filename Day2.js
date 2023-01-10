function longestPalindrome(str) {
    let longest = '';
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j < str.length; j++) {
        const candidate = str.slice(i, j + 1);
        if (candidate.length > longest.length && candidate === candidate.split('').reverse().join('')) {
          longest = candidate;
        }
      }
    }
    return longest;
  }
  const input = 'deified';
  const output = longestPalindrome(input);
  console.log(output); 
    