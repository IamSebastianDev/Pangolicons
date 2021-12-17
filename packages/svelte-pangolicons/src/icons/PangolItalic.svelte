
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
			class="pangolicons pangolicons-italic {className}"
		>
			<line  x1="8.02" y1="4" x2="19.38" y2="4"/><line  x1="13.7" y1="4" x2="10.3" y2="20"/><line  x1="4.62" y1="20" x2="15.98" y2="20"/>
		</svg>
	