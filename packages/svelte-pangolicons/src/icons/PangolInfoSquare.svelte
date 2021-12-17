
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
			class="pangolicons pangolicons-infoSquare {className}"
		>
			<rect  x="3" y="3" width="18" height="18" rx="3"/><line  x1="12" y1="11.11" x2="12" y2="16"/><line  x1="12" y1="8" x2="12" y2="8.44"/>
		</svg>
	