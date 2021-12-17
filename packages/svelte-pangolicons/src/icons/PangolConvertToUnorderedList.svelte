
		<script>
			let className = '';
			let size = '24';
			let strokeWidth = '1.5';

			export let attributes = {};
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
			class="pangolicons pangolicons-convertToUnorderedList {className}"
		>
			<line  x1="9.33" y1="12" x2="20" y2="12"/><line  x1="4" y1="6.67" x2="20" y2="6.67"/><line  x1="9.33" y1="17.33" x2="20" y2="17.33"/><line  x1="5.32" y1="12" x2="5.33" y2="12"/><line  x1="5.32" y1="17.33" x2="5.33" y2="17.33"/>
		</svg>
	