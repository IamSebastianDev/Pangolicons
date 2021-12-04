/** @format */

/**
 * This processor sanitzies the path segments of the icon. It removes classes, definitions and other unessary markup,
 * and will return only the svgs paths
 */

export default async ({ result, config, error }) =>
	result.map(({ tags, path }) => {
		const pathRegex = /<svg .+?<\/defs>(?<pathFrag>.+?)<\/svg>/im;
		const classRegex = /class=".+?"/gim;

		// return the first capture group by matching the definition regex and returning the index 1 of the retunrend array.

		const matchedFragment = [...path.match(pathRegex)][1];
		path = matchedFragment.replace(classRegex, '');

		return { tags, path };
	});
