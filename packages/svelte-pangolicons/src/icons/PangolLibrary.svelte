
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
			class="pangolicons pangolicons-library {className}"
		>
			<line  x1="6.5" y1="4" x2="6.5" y2="20"/><line  x1="9.5" y1="20" x2="9.5" y2="8"/><line  x1="12.5" y1="20" x2="12.5" y2="6"/><line  x1="17.5" y1="20" x2="15.5" y2="8"/>
		</svg>
	