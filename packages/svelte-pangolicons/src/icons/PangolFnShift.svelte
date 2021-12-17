
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
			class="pangolicons pangolicons-fnShift {className}"
		>
			<rect  x="3.5" y="3.5" width="17" height="17" rx="1.5"/><polygon  points="17 12.12 12 8 7 12.12 9.84 12.12 9.84 16 14.16 16 14.16 12.12 17 12.12"/>
		</svg>
	