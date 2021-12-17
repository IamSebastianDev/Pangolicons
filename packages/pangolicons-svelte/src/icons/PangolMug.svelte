
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
			class="pangolicons pangolicons-mug {className}"
		>
			<path  d="M15.85,4V15c0,2.75-1.8,5-4,5H8c-2.2,0-4-2.25-4-5V4"/><rect  x="16.44" y="7.03" width="3.56" height="7.41" rx="1.5"/>
		</svg>
	