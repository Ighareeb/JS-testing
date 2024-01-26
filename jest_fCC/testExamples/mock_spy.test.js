//mocking are 'fake' implementations of functions - jest.fn() creates a mock function
//mocking is used to isolate the code being tested from its dependencies and increase test speed
//eg. mocking a db call
//jest.spyOn(obj, methodName) method can used to track/spy on behaviour of functions - creates a mock function that tracks calls to object.methodName

//----------------------------------------------------
test('mock implementation of basic function', () => {
	const mock = jest.fn((x) => 42 + x);
	expect(mock(1)).toBe(43);
	expect(mock).toHaveBeenCalledWith(1);
});

test('spying on a method of an object', () => {
	const video = {
		play() {
			return true;
		},
	};

	const spy = jest.spyOn(video, 'play');
	video.play();

	expect(spy).toHaveBeenCalled();
	spy.mockRestore(); //used to restore the original (non-mocked) implementation of a function + cleanup so future tests are not affected by the mock
});
