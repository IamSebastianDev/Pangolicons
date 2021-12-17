
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
			class="pangolicons pangolicons-key {className}"
		>
			<rect  x="3.95" y="12.32" width="7.06" height="7.06" rx="3.53" transform="translate(13.4 -0.64) rotate(45)"/><line  x1="10.8" y1="12.52" x2="18.29" y2="5.04"/><polyline  points="17.46 5.87 19.95 8.37 17.46 10.86 15.79 9.2"/>
		</svg>
	