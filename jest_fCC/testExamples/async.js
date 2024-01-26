function testTimeout(callback) {
	setTimeout(() => {
		callback('testing setTimeout async function');
	}, 1000);
}

function fetchPromise(x) {
	return new Promise((resolve, reject) => {
		if (x === 0) {
			reject('error');
		} else {
			setTimeout(() => {
				resolve('testing promise async function');
			}, 2000);
		}
	});
}

async function fetchData(pokemon) {
	try {
		const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
		const data = await res.json();
		// console.log(data.name);
		return data.name;
	} catch (err) {
		console.error(err);
		throw error;
	}
}
// fetchData('pikachu');

module.exports = { testTimeout, fetchPromise, fetchData };
