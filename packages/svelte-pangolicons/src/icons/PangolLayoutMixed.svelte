
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
			class="pangolicons pangolicons-layoutMixed {className}"
		>
			<rect  x="3.5" y="3.5" width="17" height="17" rx="1.5"/><line  x1="12" y1="3.5" x2="12" y2="20.5"/><line  x1="3.5" y1="12" x2="12" y2="12"/>
		</svg>
	