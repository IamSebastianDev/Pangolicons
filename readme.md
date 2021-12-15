<!-- @format -->

<p align="center">
    <img src="./pangollogo.png" alt="logo">
</p>

# Pangolicons

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)
[![Version](https://img.shields.io/badge/version-3.0.3-informational?style=flat-square)](http://badges.mit-license.org)
[![Size](https://img.shields.io/badge/size-71kb-informational?style=flat-square)]("")

Pangolicons is a modern & minimal open source SVG Icon library with a simple, fully tree-shakeable API. You can see the Icons in action and learn more about Pangolicons [here](http://pangolicons.xyz).

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

You now have access to the `Pangolicons` object inside the global scope and can use it's API to replace and render Icons.

```html
<body>
    ...
    <!-- Add the Icon to your markup -->
    <i pangolicons="pangolin">
    ...
    <script>
        // replace all "i" elements with a "pangolicons" attribute
        // with their corresponding SVG element

        Pangolicons.replaceAll()
    </script>
</body>
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

After importing the Icon, you can use it's API to turn it into a SVG or string, depening on your use case. You can read more about this in the [API - Icon](#api-icon) section.

```js
// creating and appending a icon to the body as SVG
document.querySelector('body').appendChild(pangolin.toSvg());
```

> Note: You can still import the `Pangolicons` object and use it's API, even with ESM.

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
```

You can create Icons in node.js with the `toString()` method of the Icon or access the Pangolicons API after importing it. You cannot create a SVG, as this requires the window.document property, which is obviously undefined in node.

```js
// import the icon you want to use

import { github } from 'pangolicons';

// insert the icon into a string

const link = `<a ... >${github.toString()}</a>`;
```

You can also import all icons at the same time if you wish to, but this will disable tree-shaking.

```js
// import all icons as "icons" object

import * as icons from 'pangolicons';

// extract the github icon from the icons import object

const { github } = icons;
```

## Creating Icons

As you have seen, Icons can be created in different ways. Let's take a closer look at those ways.

### Directly in the markup

Using Pangolicons in a browser enviroment enables you to add Icons directly to the DOM and programmaticly replace them when the website has finished loading. The easiest way is to add a `<i>` tag and give it a `pangolicons` attribute, then call the `Pangolicons.replaceAll()` method to replace all those tags with a SVG element. All properties on the `<i>` tag will be transfered to the created SVG.

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

	<!-- call the Pangolicons.replaceAll() method to create the SVGs -->
	<script>
		Pangolicons.replaceAll();
	</script>
</body>
```

The icons will be created with a set of default attributes, you can read more about that in the [API - Default Attributes]("") section. There are quite a lot of attributes you can use to customize your icons, as well as using normal CSS to style them.

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
document.body.innerHTML += string;
```

You can also directly replace a Icon created in markup using the `Pangolicons` API. If this is actually useful is questionable, but more options never hurt.

```html
<!-- Consider a case where you have one or multiple icons in your markup -->
<body>
	<i pangolicons="x"></i>
</body>
```

```js
// Instead of calling the Pangolicons.replaceAll() method,
// you can granularly replace certain icons

const iconToReplace = document.querySelector('i[pangolicons="x"]');
Pangolicons.replace({ element: iconToReplace });

// this will only replace the "x" icon and leave all other
// <i> tags intact.
```

> Note: Documentation is not finished and is currently being updated.

## 📋 License

Pangolicons is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## 🦄 Inspiration

Pangolicons is heavily inspired by [Feather Icons](https://github.com/feathericons/feather) & [Lucide Icons](https://github.com/lucide-icons/lucide).
