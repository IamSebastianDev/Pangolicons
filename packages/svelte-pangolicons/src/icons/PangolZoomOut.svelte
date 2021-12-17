
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
			class="pangolicons pangolicons-zoomOut {className}"
		>
			<circle  cx="14.29" cy="9.71" r="5.71"/><path  d="M9.88,14.12,4,20Z"/><line  x1="12" y1="9.71" x2="16.96" y2="9.71"/>
		</svg>
	