export const getModels = () => createGET('http://localhost:3000/api/models');
export const getFabrics = () => createGET('http://localhost:3000/api/fabrics');
export const getAccessories = () =>
	createGET('http://localhost:3000/api/accessories');

function createGET(url) {
	return fetch(url)
		.then((res) => res.json())
		.catch((err) => {
			console.error(err);
		});
}
