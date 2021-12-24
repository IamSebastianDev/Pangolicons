/** @format */

import { writable } from 'svelte/store';

const storageIdentifier = 'Pangolicons__UserColourTheme';

const colorScheme = writable();
const rainbow = writable(false);
let counter = 0;
let easterEgg = 8;

const setTheme = (name) => {
	colorScheme.set(name);

	localStorage.setItem(storageIdentifier, name);
	document.documentElement.className = name;
};

const setInitial = () => {
	setTheme(window.localStorage.getItem(storageIdentifier));
};

const toggleColorScheme = () => {
	const userTheme = localStorage.getItem(storageIdentifier);
	counter != easterEgg && counter++;

	if (counter === easterEgg) {
		rainbow.set(true);
		counter = 0;
		return;
	} else {
		rainbow.set(false);
	}

	if (userTheme === 'dark') {
		setTheme('light');
	} else {
		setTheme('dark');
	}
};

export { colorScheme, rainbow, toggleColorScheme, setInitial };
