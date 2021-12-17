
		<script>
			let className = '';
			let size = '24';
			let strokeWidth = '1.5';

			export let attributes = { className, size, strokeWidth };
			$: ({ className, size, strokeWidth } = attributes);
		</script>

		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="{size}"
			height="{size}"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="{strokeWidth}"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="pangolicons pangolicons-layers {className}"
		>
			<polyline  points="3.62 15.69 12.06 19.91 20.5 15.69"/><polyline  points="3.5 12 11.94 16.22 20.38 12"/><polygon  points="20.38 8.31 11.94 4.09 3.5 8.31 11.94 12.53 20.38 8.31"/>
		</svg>
	