const sum = require('./examples');

//note: test()/it() are interchangeable ways to define a test case (only semantic difference)

//.toBe used for === so used with primitive data types
test('test add without using imported function', () => {
	expect(2 + 2).toBe(4);
});

test('add 1 + 2 to equal 3', () => {
	expect(sum(1, 2)).toBe(3);
});

//.toBeFalsy/Truthy used for booleans
test('null is falsy, 1 is truthy', () => {
	const n = null; //falsy values are 0,'',false,null,undefined,NaN
	const t = 1;
	expect(n).toBeFalsy();
	expect(t).toBeTruthy();
});

//.toEqual performs deep equality check; recursively checks each field of an obj/arr
test('object assignment', () => {
	const data = { one: 1, two: 2 };
	expect(data).toEqual({ one: 1, two: 2 });
});

//.toThrow used for testing that error is thrown when a function is called
//note need to call sum() inside a function so expect can receive the error, otherwise sum just gets called before it gets a change to set up etrror checking/not be able to catch the error
test('throws an invalid input', () => {
	expect(() => {
		sum(4);
	}).toThrow('You need to provide two numbers');
});
