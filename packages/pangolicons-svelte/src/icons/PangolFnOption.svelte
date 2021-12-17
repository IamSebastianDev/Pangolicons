
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
			class="pangolicons pangolicons-fnOption {className}"
		>
			<rect  x="3.5" y="3.5" width="17" height="17" rx="1.5"/><polyline  points="7 11 10.44 11 13.87 15 17 15"/><line  x1="17" y1="11" x2="13.62" y2="11"/>
		</svg>
	