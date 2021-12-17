
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
			class="pangolicons pangolicons-move {className}"
		>
			<polyline  points="18.25 14.25 20.5 12 18.25 9.75"/><polyline  points="14.25 5.75 12 3.5 9.75 5.75"/><polyline  points="14.25 18.25 12 20.5 9.75 18.25"/><polyline  points="5.75 9.75 3.5 12 5.75 14.25"/><line  x1="12" y1="3.5" x2="12" y2="20.5"/><line  x1="3.5" y1="12" x2="20.5" y2="12"/>
		</svg>
	