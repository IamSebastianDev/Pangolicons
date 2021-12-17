
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
			class="pangolicons pangolicons-resizeImage {className}"
		>
			<rect  x="4" y="4" width="16" height="16" rx="1.4"/><polyline  points="7.43 10.86 7.43 7.43 10.86 7.43"/><polyline  points="16.57 13.14 16.57 16.57 13.14 16.57"/>
		</svg>
	