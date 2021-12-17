
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
			class="pangolicons pangolicons-calendar {className}"
		>
			<rect  x="4" y="5" width="16" height="14" rx="1.4"/><line  x1="4" y1="9.52" x2="20" y2="9.52"/><line  x1="8" y1="6.23" x2="8" y2="3.23"/><line  x1="16" y1="6.23" x2="16" y2="3.23"/>
		</svg>
	