
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
			class="pangolicons pangolicons-bookClosed {className}"
		>
			<path  d="M6.13,18V6a2,2,0,0,1,2-2h9.74V20H8.13A2,2,0,0,1,6.13,18Zm11.74-2.27H8.27a2.14,2.14,0,0,0-2.14,2.14"/>
		</svg>
	