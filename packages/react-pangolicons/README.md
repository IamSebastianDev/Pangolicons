<!-- @format -->

# React-Pangolicons

[Pangolicons](https://pangolicons.xyz), but for React! 🎉

## 🚀 Getting started

Install the package via `npm`:

```bash
npm install react-pangolicons
```

You can then import the Icons you want to use into your component.

```js
import React from 'react';

// Import the icon you need

import { Pangolin } from 'react-pangolicons';

// In case the Iconname conflicts with one of your own Components,
// you can change the name on Import

import { Pangolin as PangolinIcon } from 'react-pangolicons';

export default () => {
	return (
		<div>
			...
			<Pangolin />
			<PangolinIcon />
		</div>
	);
};
```

All icons are converted to PascalCase to work with React out of the box.

### `Attributes`

The component can receive a number of props to configure the icon.

| Property    | Type    | Description                                        |
| ----------- | ------- | -------------------------------------------------- |
| size        | String? | The size of the Icon.                              |
| className   | String? | A custom class name to append to the icon classes. |
| strokeWidth | String? | The stroke-width property of the svg               |
| color       | String? | The color of the stroke                            |
| linejoin    | String? | The linejoin of the stroke                         |
| linecap     | String? | The linecap of the stroke                          |

```js
import React from 'react';
import { Pangolin } from 'react-pangolicons';

export default () => {
	return <Pangolin size={24} strokeWidth={1.5} />;
};
```

You could also use destructuring to pass the props.

```js
import React from 'react';
import { Pangolin } from 'react-pangolicons';

export default () => {
	const attributes = {
		size: 24,
		strokeWidth: 1.5,
		color: 'currentColor',
	};

	return <Pangolin {...attributes} />;
};
```

## 📋 License

React-Pangolicons is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## 🦄 Inspiration

Pangolicons is heavily inspired by [Feather Icons](https://github.com/feathericons/feather) & [Lucide Icons](https://github.com/lucide-icons/lucide).
