/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts');
	const guides = await response.json();

	if (response.ok) {
		return {
			props: {
				guides
			}
		};
	}

	return {
		status: response.status,
		error: new Error('Could not fetch the guides')
	};
}
