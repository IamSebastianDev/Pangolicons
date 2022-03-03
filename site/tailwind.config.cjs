/** @format */

const typography = require('@tailwindcss/typography');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkmode: 'class',
	theme: {
		extend: {
			fontFamily: {
				comfortaa: ['Comfortaa', 'sans-serif'],
				open: ['Open sans', 'sans-serif'],
			},
			colors: {
				pangol: {
					100: '#8CB6CF',
					300: '#619BBD',
					500: '#407899',
					700: '#305B73',
					900: '#1E3948',
				},
			},
		},
	},

	plugins: [typography],
};

module.exports = config;
