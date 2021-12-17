
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
			class="pangolicons pangolicons-location {className}"
		>
			<circle  cx="12" cy="9.26" r="2.35"/><path  d="M17.21,12.89A6.39,6.39,0,0,0,12.58,3L12,3l-.58,0a6.39,6.39,0,0,0-4.63,9.87L12,21Z"/>
		</svg>
	