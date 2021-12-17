
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
			class="pangolicons pangolicons-squareX {className}"
		>
			<rect  x="3" y="3" width="18" height="18" rx="3"/><line  x1="9" y1="15" x2="15" y2="9"/><line  x1="15" y1="15" x2="9" y2="9"/>
		</svg>
	