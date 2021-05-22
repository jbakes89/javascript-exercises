function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (args) {
	let total = 0;
	for (n of args) {
		total += n;
	}
	return total;
}

function multiply (args) {
	let total = 1;
	for (n of args) {
		total *= n;
	}
	return total;
}

function power(n, exp) {
	return n**exp;
}

function factorial(n) {
	total = 1;
	for (var i = 1; i <= n; i++) {
		total *= i;
	}
	return total;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}