
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
			class="pangolicons pangolicons-sword {className}"
		>
			<path  d="M9.49,14.51h1.58l8.64-7.08L20.5,3.5l-3.93.79L9.49,12.93ZM13.27,16c-.63.62-2.32,0-3.78-1.51S7.36,11.36,8,10.73M3.5,17.26c.38-.39,1.42,0,2.32.92s1.31,1.94.92,2.32m2.75-6L6.21,17.79"/>
		</svg>
	