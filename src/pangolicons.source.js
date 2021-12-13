/** @format */

import { Icon } from './icon.mjs';

/** @icons */
export const Pangolicons = {
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

	search({ searchString, tags = true }) {
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

