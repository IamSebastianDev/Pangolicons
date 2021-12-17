
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
			class="pangolicons pangolicons-moveDiagonal {className}"
		>
			<polyline  points="14.83 18.01 18.01 18.01 18.01 14.83"/><polyline  points="9.17 5.99 5.99 5.99 5.99 9.17"/><line  x1="5.99" y1="5.99" x2="18.01" y2="18.01"/>
		</svg>
	