
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
			class="pangolicons pangolicons-bookmark {className}"
		>
			<path  d="M5.6,20V5.5A1.5,1.5,0,0,1,7.1,4h9.8a1.5,1.5,0,0,1,1.5,1.5V20m0,0L12,15.89,5.6,20"/>
		</svg>
	