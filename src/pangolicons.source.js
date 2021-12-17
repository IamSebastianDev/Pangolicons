/** @format */

import { Icon } from '../icon.mjs';

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
		if (element === undefined || !(element instanceof HTMLElement)) {
			console.error(
				`Pangolicons: ${element} is either undefined or no HTMLElement.`
			);
		}

		if (typeof window === 'undefined' || typeof document === 'undefined') {
			console.error(
				`Pangolicons: The 'replaceAll' & 'replace' methods will only work in a browser enviroment.`
			);
			return;
		}

		const iconName = element.getAttribute('pangolicons');

		if (iconName === undefined) {
			console.log(
				`Pangolicons: element to replace does not have a 'pangolicons' attribute.`
			);
			return;
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
			console.error(
				`Pangolicons: The 'replaceAll' & 'replace' methods will only work in a browser enviroment.`
			);
			return;
		}

		const icons = document.querySelectorAll('i[pangolicons]');
		icons.forEach((element) => this.replace({ element }));
	},

	/**
	 *	@description method to search the Pangolicons.icons object for all icons which tags (and in extension name)
	 * matches the defined searchstring.
	 *
	 * 	@param { Object } param0 - the object passed to the replace method with the element property
	 * 	@param { String } param0.searchString - the String to search for
	 *
	 * 	@returns { Icon[] } an Array containing all icons found with the matching tags
	 */

	search({ searchString }) {
		if (searchString !== 'x' && searchString.length < 3) {
			return;
		}

		// convert the searchstring to lowercase

		searchString = searchString.toLowerCase();

		// helper method to match tags to the searchstring

		const matchTags = (searchString, tags) =>
			tags
				.map((elem) => elem.toLowerCase())
				.some((tag) => tag.includes(searchString));

		// itterate over the icons

		return Object.values(Pangolicons.icons)
			.map((icon) => {
				if (matchTags(searchString, icon.tags)) {
					return icon;
				}
			})
			.filter((elem) => elem != undefined);
	},
};
