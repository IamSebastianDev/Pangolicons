
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
			class="pangolicons pangolicons-shuffle {className}"
		>
			<line  x1="3.5" y1="20.5" x2="20.5" y2="3.5"/><polyline  points="20.5 15 20.5 20.5 15 20.5"/><polyline  points="15 3.5 20.5 3.5 20.5 9"/><line  x1="9.63" y1="9.63" x2="3.5" y2="3.5"/><line  x1="20.5" y1="20.5" x2="14.5" y2="14.5"/>
		</svg>
	