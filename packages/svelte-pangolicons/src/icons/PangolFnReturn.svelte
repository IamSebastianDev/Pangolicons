
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
			class="pangolicons pangolicons-fnReturn {className}"
		>
			<rect  x="3.5" y="3.5" width="17" height="17" rx="1.5"/><polyline  points="10.27 16.5 7.5 13.71 10.27 10.93"/><polyline  points="7.5 13.71 16.5 13.71 16.5 7.5 11.63 7.5"/>
		</svg>
	