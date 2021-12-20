/** @format */

const packageList = ['pangolicons', 'svelte-pangolicons', 'react-pangolicons'];
const endpoint = 'https://registry.npmjs.org/';

const grabPackageData = async ({ packageList, endpoint }) => {
	const packages = [];

	// itterate over the package list to retrieve all data associated with the specified package

	for (const pkg of packageList) {
		try {
			const res = await fetch(endpoint + pkg);
			const data = await res.json();

			// extract the useable data from the data object
			const latest = data.versions[data['dist-tags'].latest];
			const { name, readmeFilename, keywords, license, description } =
				data;
			const url = `https://npmjs.org/${pkg}`;

			packages.push({
				name,
				readmeFilename,
				keywords,
				license,
				latest,
				url,
				description,
			});
		} catch (e) {
			return e;
		}
	}

	return packages;
};

export async function get() {
	return {
		body: await grabPackageData({ packageList, endpoint }),
	};
}
