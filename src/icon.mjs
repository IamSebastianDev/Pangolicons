/** @format */

export const Icon = ({ path, tags = [], name }) => {
	let _defaultAttributes = {
		xmlns: 'http://www.w3.org/2000/svg',
		width: '24',
		height: '24',
		viewBox: '0 0 24 24',
		stroke: 'currentColor',
		fill: 'none',
		'stroke-linecap': 'round',
		'stroke-width': '1.5',
		'stroke-linejoin': 'round',
		'stroke-align': 'center',
	};

	/**
	 *
	 *  @public @method
	 *  @description method to create a svg element displaying the icon using the supplied attributes and the
	 *  defaultAttributes
	 *
	 *  @param { {} } attributes - the attributes passed to the method
	 *
	 *  @returns { SVGElement } the created Element
	 *
	 */

	const toSvg = (attributes) => {
		// create the svg element

		const svg = document.createElementNS(
			'http://www.w3.org/2000/svg',
			'svg'
		);

		/*
            Create a new Object containing the default attributes for the svg, the className, and all attributes passed to the method creating the element.
        */

		const attributesToAssign = {
			..._defaultAttributes,
			class: `pangolicons pangolicons-${name}`,
			...attributes,
		};

		/*
            Itterate over the attributes and assign them to the SVG Element
        */

		for (const attributeName in attributesToAssign) {
			if (Object.hasOwnProperty.call(attributesToAssign, attributeName)) {
				const attribute = attributesToAssign[attributeName];

				svg.setAttribute(attributeName, attribute);
			}
		}

		// add the definition to the svg element

		svg.innerHTML = path;

		// return the created svg

		return svg;
	};

	/**
	 *
	 *  @public @method
	 *  @description method to create a svg string displaying the icon using the supplied attributes and the
	 *  defaultAttributes
	 *
	 *  @param { {} } attributes - the attributes passed to the method
	 *
	 *  @returns { String } the created Element's outerHTML
	 *
	 */

	const toString = (attributes) => {
		const attributesToAssign = {
			..._defaultAttributes,
			class: `pangolicons pangolicons-${name}`,
			...attributes,
		};

		// create the attribute string by itterating over the created object and concatining them to the string.
		let attributeString = '';

		for (const attributeName in attributesToAssign) {
			if (Object.hasOwnProperty.call(attributesToAssign, attributeName)) {
				const attribute = attributesToAssign[attributeName];
				attributeString += `${attributeName}="${attribute}" `;
			}
		}

		return `<svg ${attributeString}>${path}</svg>`;
	};

	return {
		name,
		path,
		tags,
		_defaultAttributes,
		toString,
		toSvg,
	};
};
