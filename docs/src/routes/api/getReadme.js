/** @format */

const getReadme = async ({ name, readme }) => {
	const endpoint = `https://unpkg.com/${name}/${readme}`;
	const res = await fetch(endpoint);
	const markdown = await res.text();

	return markdown;
};

export async function get({ url }) {
	const name = url.searchParams.get('name');
	const readme = url.searchParams.get('readme');

	return {
		body: await getReadme({ name, readme }),
	};
}
