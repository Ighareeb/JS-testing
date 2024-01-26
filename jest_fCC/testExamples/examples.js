function sum(a, b) {
	if (arguments.length !== 2) {
		throw Error('You need to provide two numbers');
	}
	return a + b;
}

module.exports = sum;
