/** @format */

export const get = async ({ params }) => {
    const res = await fetch('https://api.npms.io/v2/search?q=pangolicons');
    const { results } = await res.json();
    const packages = results.map((res) => res.package);

    return { body: { packages } };
};
