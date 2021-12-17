
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
			class="pangolicons pangolicons-underline {className}"
		>
			<path  d="M18.15,4v7.47C18.15,15,15.4,16.8,12,16.8h0c-3.4,0-6.15-1.8-6.15-5.33V4"/><line  x1="5.85" y1="20" x2="18.15" y2="20"/>
		</svg>
	