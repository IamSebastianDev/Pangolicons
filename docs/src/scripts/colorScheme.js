/** @format */

import { writable } from 'svelte/store';

const storageIdentifier = 'pangolicons__preferColourSchemeDark';
const schemeIsDark = writable();

const initalizeColorScheme = () => {
	const isDark = document.documentElement.classList.contains('dark');

	schemeIsDark.set(isDark);
	localStorage.setItem(storageIdentifier, isDark);
};

const toggleColorScheme = () => {
	document.documentElement.classList.toggle('dark');
	schemeIsDark.update((scheme) => !scheme);

	// handle local storage to update user's preference

	const userPrefersDarkTheme = window.localStorage.getItem(storageIdentifier);
	window.localStorage.setItem(
		storageIdentifier,
		userPrefersDarkTheme === 'true' ? false : true
	);
};

export { schemeIsDark, initalizeColorScheme, toggleColorScheme };
