
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
			class="pangolicons pangolicons-clouds {className}"
		>
			<path  d="M5.93,18.75H16.25a4,4,0,0,0,0-8,4,4,0,0,0-1.62.35,6,6,0,1,0-8.7,7.65Z"/><path  d="M12.51,5.91a5.93,5.93,0,0,1,2.74-.66,5.27,5.27,0,0,1,5.5,5"/>
		</svg>
	