<!-- @format -->

# Svelte-Pangolicons

[Pangolicons](https://pangolicons.xyz), but for Svelte! 🎉

## 🚀 Getting started

Install the package via `npm`:

```bash
npm install svelte-pangolicons
```

You can then import the Icons you want to use into your component.

```html
<script>
	// Import the icons you want to use
	import { Pangolin } from 'svelte-pangolicons';

	// if the Icon's conflicts with one of your own components,
	// you can import them by a different name

	import { Pangolin as PangolinIcon } from 'svelte-pangolicons';
</script>

<Pangolin />
<PangolinIcon />
```

All icons are converted to PascalCase to work with svelte out of the box.

### `Attributes`

You might pass a `attributes` object to the component using the spread syntax containing the following properties:

| Property    | Type    | Description                                        |
| ----------- | ------- | -------------------------------------------------- |
| size        | String? | The size of the Icon.                              |
| className   | String? | A custom class name to append to the icon classes. |
| strokeWidth | String? | The stroke-width property of the svg               |
| color       | String? | The color of the stroke                            |
| linejoin    | String? | The linejoin of the stroke                         |
| linecap     | String? | The linecap of the stroke                          |

You can also pass the properties individually.

```html
<script>
	// The attributes below are the default attributes every icon has

	const attributes = {
		size: '24',
		strokeWidth: '1.5',
		className: 'pangolicon',
		color: 'currentColor',
		linejoin: 'round',
		linecap: 'round',
	};
</script>

...

<Pangolin {...attributes} />
```

## 📋 License

Svelte-Pangolicons is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## 🦄 Inspiration

Pangolicons is heavily inspired by [Feather Icons](https://github.com/feathericons/feather) & [Lucide Icons](https://github.com/lucide-icons/lucide). Svelte-Pangolicons was inspired by [Svelte-Feather-Icons](https://github.com/dylanblokhuis/svelte-feather-icons).
