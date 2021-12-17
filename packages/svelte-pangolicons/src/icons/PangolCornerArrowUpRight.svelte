
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
			class="pangolicons pangolicons-cornerArrowUpRight {className}"
		>
			<path  d="M12.66,5l4.51,4.51L12.66,14l4.51-4.51H9.35A2.52,2.52,0,0,0,6.83,12v7"/>
		</svg>
	