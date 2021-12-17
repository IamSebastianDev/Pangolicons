
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
			class="pangolicons pangolicons-phoneOff {className}"
		>
			<path  d="M5.75,15.15C1.55,8.94,4.52,3.56,4.52,3.56H8.11L9,7.15,7.21,8.94S5.9,9.6,8.32,12.59m1,5.95c6.2,3.84,11.21.67,11.21.67l-.1-3.58-3.61-.81-1.74,1.84s-.42,1.55-3.61-1"/><line  x1="4.5" y1="19.5" x2="19.5" y2="4.5"/>
		</svg>
	