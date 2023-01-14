function fibonacci(num) {
    let sequence = [0, 1];
    for (let i = 2; i <= num; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}
function fibonacci(num) {
    if (num === 0) {
        return [0];
    } else if (num === 1) {
        return [0, 1];
    } else {
        let fibo = fibonacci(num - 1);
        fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
        return fibo;
    }
}
console.log(fibonacci(5)); 
console.log(fibonacci(7));  
console.log(fibonacci(3)); 
