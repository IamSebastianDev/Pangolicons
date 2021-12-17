
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
			class="pangolicons pangolicons-youtube {className}"
		>
			<path  d="M19.74,18A66.9,66.9,0,0,1,4.26,18a23.72,23.72,0,0,1,0-12A66.9,66.9,0,0,1,19.74,6h0a23.72,23.72,0,0,1,0,12Z"/><polyline  points="10.28 9.93 13.72 12 10.28 14.07 10.28 9.93"/>
		</svg>
	