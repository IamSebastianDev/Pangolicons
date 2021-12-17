
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
			class="pangolicons pangolicons-cloud {className}"
		>
			<path  d="M6.18,17.5H16.5a4,4,0,0,0,0-8,4,4,0,0,0-1.62.35,6,6,0,1,0-8.7,7.65Z"/>
		</svg>
	