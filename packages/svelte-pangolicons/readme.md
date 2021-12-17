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
	import { PangolPangolin } from 'svelte-pangolicons';
</script>

<PangolPangolin attributes="{{...}}" />
```

All icons follow the `Pangol` + `IconName` naming scheme in PascalCase.

### `Attributes`

You might pass a `attributes` object to the component containing the following properties:

| Property    | Type    | Description                                        |
| ----------- | ------- | -------------------------------------------------- |
| size        | String? | The size of the Icon.                              |
| className   | String? | A custom class name to append to the icon classes. |
| strokeWidth | Number? | The stroke-width property of the svg               |

```html
<script>
	const attributes = { size: '24', strokeWidth: 1.5, className: 'nav-icon' };
</script>

...
<PangolPangolin {attributes} />
```

## 📋 License

Svelte-Pangolicons is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## 🦄 Inspiration

Pangolicons is heavily inspired by [Feather Icons](https://github.com/feathericons/feather) & [Lucide Icons](https://github.com/lucide-icons/lucide). Svelte-Pangolicons was inspired by [Svelte-Feather-Icons](https://github.com/dylanblokhuis/svelte-feather-icons).
