/** @format */

const getReadme = async ({ name, readme }) => {
	const endpoint = `https://unpkg.com/${name}/${readme}`;
	const res = await fetch(endpoint);
	const markdown = await res.text();

	return markdown;
};

export async function get({ query }) {
	const name = query.get('name');
	const readme = query.get('readme');

	return {
		body: await getReadme({ name, readme }),
	};
}
