
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
			class="pangolicons pangolicons-convertToOrderedList {className}"
		>
			<line  x1="9.33" y1="12" x2="20" y2="12"/><line  x1="4" y1="6.67" x2="20" y2="6.67"/><line  x1="9.33" y1="17.33" x2="20" y2="17.33"/><polyline  points="4.7 11.58 5.7 10.75 5.7 13.25"/><path  d="M5.2,17.33c.51,0,.83-.28.83-.62s-.42-.63-.93-.63"/><path  d="M5.17,18.58c.52,0,.93-.28.93-.62s-.41-.63-.93-.63"/>
		</svg>
	