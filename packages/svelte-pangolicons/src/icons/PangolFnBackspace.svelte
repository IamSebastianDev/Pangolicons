
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
			class="pangolicons pangolicons-fnBackspace {className}"
		>
			<rect  x="3.5" y="3.5" width="17" height="17" rx="1.5"/><polyline  points="9.13 8.89 6.68 12.39 9.13 15.89 16.68 15.89 16.68 8.89 9.13 8.89"/><line  x1="13.48" y1="11.59" x2="11.88" y2="13.19"/><line  x1="11.88" y1="11.59" x2="13.48" y2="13.19"/>
		</svg>
	