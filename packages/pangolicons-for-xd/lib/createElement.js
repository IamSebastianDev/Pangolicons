/** @format */

/**
 *
 * Utility function to create an element and set it's attributes
 *
 * @param { string } tag - the tag of the HTMLElement that should be created.
 * @param { HTMLElement[] | HTMLElement } children - the Childelements to append to the element
 * @param { {[key: string]: string} } attributes - the dict of attributes that should be created on the element
 * @param { {[key: string]: function } } events - a dict of event to append to the element
 * @returns { HTMLElement } the created element
 */

function createElement(tag, children, attributes, events) {
	const elem = document.createElement(tag);

	if (attributes && typeof attributes === 'object') {
		Object.entries(attributes).forEach(([key, value]) =>
			elem.setAttribute(key, value)
		);
	}

	if (children && typeof children === 'string') {
		elem.textContent = children;
	} else if (children && children instanceof Array) {
		children.forEach((node) => elem.appendChild(node));
	} else if (children) {
		children.appendChild(children);
	}

	if (events && typeof events === 'object') {
		Object.entries(events).forEach(([eventName, handler]) => {
			console.log({ elem, eventName, handler });
			elem.addEventListener(eventName, (ev) => handler(ev));
		});
	}

	return elem;
}

/**
 * Method to convert a string to a textnode
 *
 * @param { string } string - the string to convert
 * @returns { Text } the converted string embed in a textnode
 */

function text(string) {
	return document.createTextNode(string);
}

module.exports = {
	createElement,
	text,
};
