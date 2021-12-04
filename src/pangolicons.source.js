/** @format */

/**
    @description the Icon Class is used to create a new Icon. It holds the definition, the name and the tags and the 
    methods used to retrieve SVG's or Strings from the Icon. 
*/

class Icon {
	/**
	 *
	 *  @description the constructor of the icon class is used to instantiate a new Icon instance.
	 *
	 *  @param { Object } config - the object passed to constructor containing the "def" & "tags" properties that
	 *  describe the svg definition and the tags associated with the icon
	 *  @param { String } config.def - the svg definition containing the path of the svg
	 *  @param { String[] } config.tags - an array containing strings describing the icon.
	 *
	 */

	constructor({ path, tags = [] }) {
		/**
		 *  @public
		 *  @type { string }
		 *  @description - the name of the icon
		 */

		this.name = tags[0];

		/**
		 *  @private
		 *  @type { string }
		 */

		this.path = path;

		/**
		 *  @public
		 *  @type { string[] }
		 */

		this.tags = tags;

		/**
		 *  @private
		 *  @type { Object }
		 *  @description - the default attributes for created svg elements
		 */

		this._defaultAttributes = {
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
			'stroke-linejoin': 'round',
		};
	}

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

	toSvg(attributes) {
		// create the svg element

		const svg = document.createElementNS(
			'http://www.w3.org/2000/svg',
			'svg'
		);

		/*
            Create a new Object containing the default attributes for the svg, the className, and all attributes passed to the method creating the element.
        */

		const attributesToAssign = {
			...this._defaultAttributes,
			class: `pangolicons pangolicons-${this.name}`,
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

		svg.innerHTML = this.path;

		// return the created svg

		return svg;
	}

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

	toString(attributes) {
		const attributesToAssign = {
			...this._defaultAttributes,
			class: `pangolicons pangolicons-${this.name}`,
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

		return `<svg ${attributeString}>${this.path}</svg>`;
	}
}

/** @icons */

const Pangolicons = {
	icons: {
		/** @list */
	},

	/**
	 *  @method
	 *	@description static method to replace a element with a icon, if that element has a pangolicons attribute.
	 *
	 * 	@param { Object } param0 - the object passed to the replace method with the element property
	 * 	@param { HTMLElement } param0.element - the HTMLElement to replace.
	 *
	 * 	@returns { SVGElement } the created svgElement with the icon
	 */

	replace({ element }) {
		const iconName = element.getAttribute('pangolicons');

		if (iconName === undefined) {
			console.log(
				`Pangolicons: element to replace does not havee a "pangolicons" attribute.`
			);
		}

		const attributes = {};

		Array.from(element.attributes).forEach((attribute) => {
			attributes[attribute.name] = attribute.value;
		});

		const icon = Pangolicons.icons[iconName].toSvg(attributes);

		element.replaceWith(icon);

		return icon;
	},

	/**
	 * @description method to replace all icons with a pangolicons attribute on the page.
	 */

	replaceAll() {
		if (typeof window === 'undefined' || typeof document === 'undefined') {
			return;
		}

		const icons = document.querySelectorAll('i[pangolicons]');
		icons.forEach((element) => this.replace({ element }));
	},

	/**
	 *  @method
	 *	@description - static method to search the Pangolicons.icons object for an icon with a name or tag matching the
	 *	searchstring
	 *
	 * 	@param { Object } param0 - the object passed to the replace method with the element property
	 * 	@param { String } param0.searchString - the String to search for
	 * 	@param { Boolean } param0.tags - a boolean indicating if the searchstring should be matched against the
	 * 	tags
	 * 	@param { Boolean } param0.name - a boolean indicating if the searchstring should be matched against the
	 * 	name
	 *
	 * 	@returns { Icon[] } an Array containing all icons found with the matching tags
	 */

	search({ searchString, tags = true, name = true }) {
		// return early if the searchstring is smaller then 3 letters
		if (searchString.length < 3) {
			return;
		}

		// convert the searchstring to lowercase

		searchString = searchString.toLowerCase();

		// helper method to match tags to the searchstring

		const matchTags = (searchString, tags) =>
			tags.filter((tag) => tag.includes(searchString));

		// itterate over the icons

		return Object.entries(Pangolicons.icons)
			.map(([name, icon]) => {
				if (tags) {
					if (matchTags(searchString, icon.tags).length > 0) {
						return icon;
					}
				} else if (!tags && name) {
					if (icon.name.toLowerCase().includes(searchString)) {
						return icon;
					}
				} else {
					console.warn(
						'Pangolicons: No matching filter for search specified'
					);
				}
			})
			.filter((elem) => elem != undefined);
	},
};

export { Pangolicons };
