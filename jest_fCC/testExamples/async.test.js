const { testTimeout, fetchPromise, fetchData } = require('./async.js');

//done() indicates that the test is complete
it('should call setTimeout after 1 second and return data', (done) => {
	testTimeout((data) => {
		try {
			expect(data).toBe('testing setTimeout async function');
			done();
		} catch (err) {
			done(err);
		}
	});
});

it('should resolve promise after 2 seconds', async () => {
	await expect(fetchPromise()).resolves.toBe('testing promise async function');
	// // OR
	// const data = await fetchPromise();
	// expect(data).toBe('testing promise async function');
});
//same but without using async await - jest waits for the Promise to resolve before testing
it('should resolve promise after 2 seconds', () => {
	return expect(fetchPromise(1)).resolves.toBe(
		'testing promise async function',
	);
});
test('should reject promise with an error', () => {
	return expect(fetchPromise(0)).rejects.toThrow('error');
});

it('should return the name of the pokemon', async () => {
	await fetchData('bulbasaur')
		.then((name) => expect(name).toBe(`bulbasaur`))
		.catch((err) => console.log(err));
});
