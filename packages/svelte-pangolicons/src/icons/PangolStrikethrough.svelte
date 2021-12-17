
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
			class="pangolicons pangolicons-strikethrough {className}"
		>
			<path  d="M10.77,11.73c-.55-.25-3.08-1.63-3.08-3.8A4.13,4.13,0,0,1,12,4a4.13,4.13,0,0,1,4.31,3.93"/><line  x1="4.62" y1="11.87" x2="19.38" y2="11.87"/><path  d="M13.57,12.27c.55.25,3.08,1.63,3.08,3.8A4.13,4.13,0,0,1,12.34,20,4.12,4.12,0,0,1,8,16.07"/>
		</svg>
	