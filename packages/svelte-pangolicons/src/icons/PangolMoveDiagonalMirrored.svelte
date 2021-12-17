
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
			class="pangolicons pangolicons-moveDiagonalMirrored {className}"
		>
			<polyline  points="14.83 5.99 18.01 5.99 18.01 9.17"/><polyline  points="9.17 18.01 5.99 18.01 5.99 14.83"/><line  x1="5.99" y1="18.01" x2="18.01" y2="5.99"/>
		</svg>
	