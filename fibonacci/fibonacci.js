const fibonacci = function(n) {
    let num = parseInt(n)
    if (n < 1) {
        return "OOPS";
    } else {
        fib = [1, 1];
        while (fib.length < n) {
            fib.push(fib[fib.length - 2] + fib[fib.length - 1]);
        }
        return fib[n-1];
    }
}

module.exports = fibonacci
