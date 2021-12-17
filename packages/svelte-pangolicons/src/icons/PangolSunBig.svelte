
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
			class="pangolicons pangolicons-sunBig {className}"
		>
			<circle  cx="12" cy="12" r="4.25"/><line  x1="12" y1="3.5" x2="12" y2="7.75"/><line  x1="20.5" y1="12" x2="16.25" y2="12"/><line  x1="12" y1="20.5" x2="12" y2="16.25"/><line  x1="3.5" y1="12" x2="7.75" y2="12"/><line  x1="5.99" y1="5.99" x2="8.99" y2="8.99"/><line  x1="18.01" y1="5.99" x2="15.01" y2="8.99"/><line  x1="18.01" y1="18.01" x2="15.01" y2="15.01"/><line  x1="5.99" y1="18.01" x2="8.99" y2="15.01"/>
		</svg>
	