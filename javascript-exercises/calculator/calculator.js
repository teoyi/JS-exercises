function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (lst) {
	sum = 0;
	for (val in lst) {
		sum += val; 
	}
	return sum
}

function multiply (lst) {
	total = 1;
	for (val in lst) {
		total *= val;
	}
	return total
}

function power() {
	
}

function factorial() {
	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}