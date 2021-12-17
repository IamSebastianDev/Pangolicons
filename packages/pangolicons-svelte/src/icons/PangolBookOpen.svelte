
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
			class="pangolicons pangolicons-bookOpen {className}"
		>
			<path  d="M12,7.45C12,3.46,20,4,20,4V16.58S12,16,12,20M4,4V16.58S12,16,12,20V7.45C12,3.46,4,4,4,4Z"/>
		</svg>
	