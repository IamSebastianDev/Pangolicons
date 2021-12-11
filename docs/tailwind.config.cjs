/** @format */

module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.svelte'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		fontFamily: {
			comfortaa: ['Comfortaa', 'sans-serif'],
			open: ['Open sans', 'sans-serif'],
		},
		extend: {
			spacing: {
				'.5': '2px',
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
			height: {
				s10: '10vh',
				s20: '20vh',
				s25: '25vh',
				s30: '30vh',
				s50: '50vh',
				s65: '65vh',
				s75: '75vh',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
