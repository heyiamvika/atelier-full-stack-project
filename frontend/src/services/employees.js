export function getAllEmployees() {
	return fetch('http://localhost:5000/api/employees')
		.then((res) => res.json())
		.catch((err) => {
			console.error(err);
		});
}
