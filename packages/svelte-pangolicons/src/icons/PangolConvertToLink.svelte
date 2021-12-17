
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
			class="pangolicons pangolicons-convertToLink {className}"
		>
			<path  d="M9.94,16.65H8.65A4.67,4.67,0,0,1,4,12H4A4.67,4.67,0,0,1,8.65,7.35H9.94"/><line  x1="8.9" y1="12" x2="15.1" y2="12"/><path  d="M14.06,16.65h1.29A4.67,4.67,0,0,0,20,12h0a4.67,4.67,0,0,0-4.65-4.65H14.06"/>
		</svg>
	