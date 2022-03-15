/** @format */

const { Pangolicons } = require('./lib/pangolicons.js');
const { createElement, text } = require('./lib/createElement.js');
let application = require('application');
let { Color, Path } = require('scenegraph');

const state = {
	rendered: false,
	tree: undefined,
};

function createNode(definitions) {
	let node = new Path();
	node.stroke = new Color('#707070');
	node.strokeWidth = 1.5;
	node.pathData = definitions.match(/"[^"]*"/gi)[0].replace('"', '');
	return node;
}

function createIcon(icon) {
	const { name, toSvg, path } = icon;

	const convertToDashed = (string) =>
		string.replace(/[A-Z]/gm, (r) => '-' + r.toLowerCase());

	const card = createElement(
		'div',
		[
			toSvg({ width: 14, height: 14 }),
			createElement('p', convertToDashed(name)),
		],
		{
			style: 'display: flex; align-items: center; padding: 0px 2px 0px 6px ; margin: 2px; border: 1px solid #a0a0a0; border-radius: 4px',
		}
	);

	card.addEventListener('click', (ev) => {
		application.editDocument((selection, root) => {
			try {
				root.addChild(createNode(path));
			} catch (e) {
				console.error(e);
			}
		});
	});

	return card;
}

function render() {
	state.tree = createElement(
		'div',
		[
			createElement('div', [
				createElement('label', 'Search for an icon:', {
					for: 'search-icons',
				}),
				// search bar
				createElement('input', null, {
					class: 'input-search',
					type: 'search',
					placeholder: 'Search Icons',
					id: 'search-icons',
					style: 'width: 100%',
				}),
			]),
			createElement(
				'div',
				Object.entries(Pangolicons.icons).map(([key, icon]) =>
					createIcon(icon)
				),
				{
					id: 'icon-container',
					style: 'display: flex; flex-direction: row; flex-wrap: wrap; stroke: #407899; fill: none; stroke-width: 2; margin-top: 12px;',
				}
			),
			createElement('p', [
				text('© 2022 Sebastian Heinz. Learn more about Pangolicons '),
				createElement('a', 'here.', {
					href: 'https://pangolicons.xyz',
					target: '_blank',
					rel: 'noreferrer noopener',
				}),
			]),
		],
		{ id: 'pangolicons-search' }
	);

	state.rendered = true;

	state.tree.querySelector('input').addEventListener('input', (ev) => {
		const searchString = ev.target.value;
		const container = state.tree.querySelector('#icon-container');
		const { icons } = Pangolicons;

		const renderIcons = (icons) => {
			container.innerHTML = '';
			icons.map((icon) => container.appendChild(createIcon(icon)));
		};

		if (searchString.length < 3) {
			renderIcons(Object.values(icons));
		} else {
			const filteredIcons = Pangolicons.search({ searchString });
			renderIcons(filteredIcons);
		}
	});

	return state.tree;
}

function show(event) {
	if (!state.rendered) event.node.appendChild(render());
}

module.exports = {
	panels: {
		pangolicons: {
			show,
		},
	},
};
