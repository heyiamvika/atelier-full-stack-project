export function createGET(url) {
	return fetch(url)
		.then((res) => res.json())
		.catch((err) => {
			console.error(err);
		});
}

export function createPOST(url, body) {
	console.log('body', JSON.stringify(body));

	return fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: JSON.stringify(body),
	})
		.then((res) => res.json())
		.then((res) => console.log('post response', res))
		.catch((err) => {
			console.error(err);
		});
}
