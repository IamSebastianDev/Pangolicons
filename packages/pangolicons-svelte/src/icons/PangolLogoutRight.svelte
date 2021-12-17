
		<script>
			let className = '';
			let size = '24';
			let strokeWidth = '1.5';

			export let attributes = {};
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
			class="pangolicons pangolicons-logoutRight {className}"
		>
			<path  d="M13.65,4h2.92a2.43,2.43,0,0,1,2.54,2.28V17.72A2.43,2.43,0,0,1,16.57,20H13.65"/><polyline  points="7.11 15.56 4.89 12 7.11 8.44 4.89 12 13.78 12"/>
		</svg>
	