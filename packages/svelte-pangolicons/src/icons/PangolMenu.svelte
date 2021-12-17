
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
			class="pangolicons pangolicons-menu {className}"
		>
			<line  x1="4.5" y1="12" x2="19.5" y2="12"/><line  x1="4.5" y1="7.5" x2="19.5" y2="7.5"/><line  x1="4.5" y1="16.5" x2="19.5" y2="16.5"/>
		</svg>
	