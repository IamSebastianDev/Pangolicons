<!-- @format -->

<p align="center">
    <img src="https://user-images.githubusercontent.com/48380512/146765938-b7bcbd8e-d951-4fa2-a320-c2c03897487f.png" alt="logo">
</p>

# Pangolicons

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)
[![Version](https://img.shields.io/badge/version-3.0.15-informational?style=flat-square)](http://badges.mit-license.org)
[![Size](https://img.shields.io/badge/size-71kb-informational?style=flat-square)]("")

Pangolicons is a modern & minimal open source SVG Icon library with a simple, fully tree-shakeable API. You can see the Icons in action and learn more about Pangolicons [here](http://pangolicons.xyz).

## 🔖 Table of contents

-   [Pangolicons](#pangolicons)
    -   [🚀 Getting started](#🚀-getting-started)
        -   [In the browser](#in-the-browser)
        -   [In the browser - the modern way](#in-the-browser---the-modern-way)
        -   [Via npm](#via-npm)
    -   [🎨 Creating Icons](#🎨-creating-icons)
        -   [Directly in the markup](#directly-in-the-markup)
        -   [With client side JavaScript](#with-client-side-javascript)
        -   [With node.js and SSR frameworks](#with-nodejs-and-ssr-frameworks)
    -   [🔧 API](#🔧-api)
        -   [`Pangolicons`](#-pangolicons1)
        -   [`Pangolicons.icons`](#-pangoliconsicons)
        -   [`Pangolicons.replaceAll(): void`](#-pangoliconsreplaceall-void)
        -   [`Pangolicons.replace({ element: HTMLElement }): SVGElement`](#pangoliconsreplace-element-htmlelement--svgelement)
        -   [`Pangolicons.search({ searchString: String }): Icon[]`](#-pangoliconssearch-searchstring-string--icon)
        -   [`Icon`](#-icon)
        -   [`Icon.name"`](#-iconname)
        -   [`Icon.tags`](#-icontags)
        -   [`Icon.path`](#-iconpath)
        -   [`Icon.toString({ ...attributes }?): string`](#icontostring-attributes--string)
        -   [`Icon.toSvg({ ...attributes }?): SVGElement`](#icontosvg-attributes--svgelement)
        -   [`defaultAttributes`](#defaultattributes)
    -   [📋 License](#📋-license)
    -   [🦄 Inspiration](#🦄-inspiration)

## 🚀 Getting started

There are many different ways you can include Pangolicons on your website or project. The simplest is to download all the Icons (or just the Icons you need) and simply include them in your markup or CSS as a regular image or svg. There are, however, additional ways you can use Pangolicons.

### In the browser

Using Pangolicons directly in the browser via JavaScript is very much possible, albeit discouraged. Without support for tree-shaking or granular exporting, the filesize is substantial. However, for prototyping, testing or personal projects it can be the easiest way to use it.

```html
<head>
	...
	<!-- as a local file -->
	<script src="./your/path/to/pangolicons.browser.min.js"></script>
	<!-- or via CDN -->
	<script src="http://unpkg.com/pangolicons"></script>
	...
</head>
```

### In the browser - the modern way

If you're not using a bundler or npm and still don't want to pollute the global scrope, you can use the ESM version of Pangolicons, which provides exports for every Icon individually.

```js
// importing from CDN
import { pangolin } from 'https://unpkg.com/pangolicons@3.0.10/dist/pangolicons.esm.mjs';

// importing from a local file
import { github } from './your/path/to/pangolicons.esm.mjs';
```

> Note: To use es6 style imports, you need to include your script file with the 'type="module"' attribute.

After importing the Icon, you can use it's API to turn it into a SVG or string, depening on your use case. You can read more about this in the [API - Icon](#-icon-) section.

### Via npm

You can also install `Pangolicons` as npm package to use it with node and/or bundlers, such as webpack or Rollup.

```bash
npm install pangolicons
```

```js
// use the older require syntax if you do not support es6 style imports
const { Pangolicons, pangolin } = require('pangolicons');

// use the modern import syntax with es6 type modules
import { Pangolicons } from 'pangolicons';

// you can also import every icon by it's name
import { pangolin, github } from 'pangolicons';

// or all icons at the same time
import * as icons from 'pangolicons';
```

> Note: Importing all icons will make tree-shaking harder, so it is not advised.

## 🎨 Creating Icons

With Pangolicons now available to your project, let's take a look at how we can create an actual icon.

### Directly in the markup

Using Pangolicons in a browser enviroment enables you to add Icons directly to the HTML markup and programmaticly replace them when the website has finished loading. The easiest way is to add a `<i>` tag and give it a `pangolicons` attribute, then call the `Pangolicons.replaceAll()` method to replace all those tags with a SVG element. All properties on the `<i>` tag will be transfered to the created SVG.

```html
<body>
	...
	<!-- The i tag will be converted to... -->
	<i pangolicons="pangolin" color="#407899"></i>
	<!-- ...a SVG with all the same attributes as the i tag -->
	<svg class="..." color="#407899">
		...
		<path>...</path>
	</svg>

	<!-- use the Pangolicons.replaceAll() method to create the SVGs -->
	<script>
		Pangolicons.replaceAll();
	</script>
</body>
```

The icons will be created with a set of default attributes, you can read more about that in the [API - Default Attributes](#-defaultattributes-) section. There are quite a lot of attributes you can use to customize your icons, as well as using normal CSS to style them.

```css
/* All icons have the 'pangolicons' class, so selecting them is easy */

.pangolicons {
	color: '#407899';
	stroke-width: 1.5;
}
```

> Note: Styling a SVG with CSS will override any SVG presentation attribute, but not inline styles.

### With client side JavaScript

There might be cases where you'll want to create the Icons with JavaScript in the browser. This is nearly as simple as doing it with markup.

```js
// This example assumes you have added Pangolicons
// using the browser file or a CDN, meaning Pangolicons
// is globally accessible.

// Get the icon you'd like to add. You can use Destructuring
// to easily access the Icon.

const { github } = Pangolicons.icons;

// the toSVG() & toString() methods take an object as argument,
// that you can use to customize the icon.

const svg = github.toSVG({ color: '#407899' });
document.body.appendChild(svg);

// you can also use innerHTML and toString() to add the icon

const string = github.toString({ color: '#407899' });
document.body.innerHTML -= string;
```

### With node.js and SSR frameworks

Pangolicons is able to render every icon as a pure SVG string, which makes it easy to use with frameworks that render markup server side, where creating elements using `document.createElementNS()` is not possible. The npm package provides a cjs file as well as a esm module for more modern node enviroments.

```js
// Import the package with import or require

import { Pangolicons } from 'pangolicons';
// or
const { Pangolicons } = require('Pangolicons');

// Access the full amount of icons and the API on the Pangolicons Object

const { pangolin } = Pangolicons.icons;

// Create the Icon with it's toString() method.
// The method will return a SVG string that can then be rendered.

const string = pangolin.toString();
```

## 🔧 API

### `Pangolicons`

The Pangolicons object is either globally available or can be imported, depening on which way you chose to add Pangolicons to your project. The object serves as a container for it's method as well as for all icons available.

### `Pangolicons.icons`

The icons property on the `Pangolicons` object is an object containing all icons. As icons are all in camelCase, you can easily access them using dot notation.

```js
// Destructure the icons object

const { icons } = Pangolicons;

// Access any icon and it's methods using dot notation

const x = icons.x;
x.toString();

// You can also destructure the icons you need directly

const { x, pangolin } = Pangolicons.icons;
```

### `Pangolicons.replaceAll(): void`

The `replaceAll` function takes no argument, but will search for all `<i>` tags with a `pangolicons` attribute and replace them with the corresponding icon, if a matching icon name can be found. You should call this method when the page has finished loading.

```js
// Wait for the window to load, then replace all <i> tags

window.addEventListener('DOMContentLoaded', () => {
	Pangolicons.replaceAll();
});
```

### `Pangolicons.replace({ element: HTMLElement }): SVGElement`

The `replace` function takes an object as argument that should contain a `element` property containg a HTMLElement. The Element will be replaced with the SVG created by looking up the elements `pangolicons="<icon name>"` attribute. The function will return a reference to the inserted icon.

```js
// Find the element that should be replaced

const elementToReplace = document.querySelector('#icon');

// Replace the icon using the replace method

const replaceIcon = Pangolicons.replace({ element: elementToReplace });
```

### `Pangolicons.search({ searchString: String }): Icon[]`

The `search` function can be used to return an array of icons that have tags matching the searchstring.

```js
const found = Pangolicons.search({ searchString: 'pangolin' });

console.log(found);
// [{name: "pangolin", tags: [ "pangolin", ... ], path: "<path ... />"", toSvg: ƒ, toString: ƒ}]
```

### `Icon`

The `Icon` object contains all values necessary to define it. It is, per se, the "Icon".

### `Icon.name`

The property holds the name of the string. It is always a string.

### `Icon.tags`

The property hold all tags of the icon in an array of strings.

### `Icon.path`

The property contains the raw svg string of the icon.

### `Icon.toString({ ...attributes }?): string`

The `toString()` method of the icon returns a string representing the created svg. A optional object can be passed that can contain svg attributes to customize the Icon. The passed object is merged with the default attributes, with the passed attributes overriding the default attributes.

```js
// Create the icon string with a customized stroke-width

const string = pangolin.toString({ 'stroke-width': 3 });
```

> Note: The method does not depend on the document property and can be used safely in node enviroments.

### `Icon.toSvg({ ...attributes }?): SVGElement`

The `toSvg()` method creates and returns a SVGElement. A optional object can be passed that can contain svg attributes to customize the Icon. The passed object is merged with the default attributes, with the passed attributes overriding the default attributes.

```js
// Create the icon with a used specified color

const icon = pangolin.toSvg({ color: '#FFEE00' });

// Append the svg to the body.

document.body.appendChild(icon);
```

### `defaultAttributes`

All Icons access the following default attributes:

| attribute name    | attribute value              |
| ----------------- | ---------------------------- |
| xmlns             | 'http://www.w3.org/2000/svg' |
| width             | '24'                         |
| height            | '24'                         |
| viewBox           | '0 0 24 24'                  |
| stroke            | 'currentColor'               |
| fill              | 'none'                       |
| 'stroke-linecap'  | 'round'                      |
| 'stroke-width'    | '1.5'                        |
| 'stroke-linejoin' | 'round'                      |
| 'stroke-align'    | 'center'                     |

For more information about SVG attributes, see the [MDN Svg Attribute reference](https://developer.mozilla.org/en-US/docs/Web/SVG)

## 📋 License

Pangolicons is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## 🦄 Inspiration

Pangolicons is heavily inspired by [Feather Icons](https://github.com/feathericons/feather) & [Lucide Icons](https://github.com/lucide-icons/lucide).
