
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
			class="pangolicons pangolicons-list {className}"
		>
			<line  x1="7.43" y1="12" x2="20" y2="12"/><line  x1="7.43" y1="6.29" x2="20" y2="6.29"/><line  x1="7.43" y1="17.71" x2="20" y2="17.71"/><line  x1="4" y1="12" x2="4.11" y2="12"/><line  x1="4" y1="6.29" x2="4.11" y2="6.29"/><line  x1="4" y1="17.71" x2="4.09" y2="17.71"/>
		</svg>
	