function countSubstring(string, substring) {
    let count = 0;
    let index = 0;
    while (index !== -1) {
        index = string.indexOf(substring, index);
        if (index !== -1) {
            count++;
            index += substring.length;
        }
    }
    return count;
}
console.log(countSubstring("The cat in the hat.", "at"));

console.log(countSubstring("The cat in the hat.", "cat"));

