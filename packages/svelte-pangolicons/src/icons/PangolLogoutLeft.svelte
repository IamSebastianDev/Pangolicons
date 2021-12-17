
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
			class="pangolicons pangolicons-logoutLeft {className}"
		>
			<path  d="M10.35,4H7.43A2.43,2.43,0,0,0,4.89,6.28V17.72A2.43,2.43,0,0,0,7.43,20h2.92"/><polyline  points="16.89 15.56 19.11 12 16.89 8.44 19.11 12 10.22 12"/>
		</svg>
	