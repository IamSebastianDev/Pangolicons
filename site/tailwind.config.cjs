/** @format */

const typography = require('@tailwindcss/typography');

const config = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    darkMode: 'class',
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
            animation: {
                rainbow: 'rainbow 5s infinite',
            },
            keyframes: {
                rainbow: {
                    '0%': { color: '#ef4444' },
                    '15%': { color: '#f97316' },
                    '30%': { color: '#eab308' },
                    '45%': { color: '#22c55e' },
                    '60%': { color: '#0891b2' },
                    '75%': { color: '#3b82f6' },
                    '90%': { color: '#8b5cf6' },
                    '100%': { color: '#ef4444' },
                },
            },
        },
    },

    plugins: [typography],
};

module.exports = config;
