
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
			class="pangolicons pangolicons-image {className}"
		>
			<rect  x="4" y="5" width="16" height="14" rx="1.4"/><line  x1="7.43" y1="8" x2="7.43" y2="8"/><line  x1="6.29" y1="19" x2="13.14" y2="13"/><line  x1="18.86" y1="18" x2="13.14" y2="13"/>
		</svg>
	