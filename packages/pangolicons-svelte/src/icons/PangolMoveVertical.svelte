
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
			class="pangolicons pangolicons-moveVertical {className}"
		>
			<polyline  points="14.25 5.75 12 3.5 9.75 5.75"/><polyline  points="14.25 18.25 12 20.5 9.75 18.25"/><line  x1="12" y1="3.5" x2="12" y2="20.5"/>
		</svg>
	