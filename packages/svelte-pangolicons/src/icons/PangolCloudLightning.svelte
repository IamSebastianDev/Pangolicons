
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
			class="pangolicons pangolicons-cloudLightning {className}"
		>
			<path  d="M16.5,15.25a4,4,0,0,0,0-8,4,4,0,0,0-1.62.35,6,6,0,1,0-8.7,7.65"/><polyline  points="12.5 10.75 10.5 13.75 12.5 16.75 10.5 19.75"/>
		</svg>
	