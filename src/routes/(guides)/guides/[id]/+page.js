import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	const id = params.id;
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
	const guide = await response.json();

	if (response.ok) {
		return {
			props: {
				guide
			}
		};
	}

	throw redirect(301, '/guides');
}
