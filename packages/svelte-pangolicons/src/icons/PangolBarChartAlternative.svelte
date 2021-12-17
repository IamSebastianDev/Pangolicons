
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
			class="pangolicons pangolicons-barChartAlternative {className}"
		>
			<line  x1="12" y1="3.5" x2="12" y2="20.5"/><line  x1="17" y1="20.5" x2="17" y2="12.19"/><line  x1="7" y1="20.5" x2="7" y2="8"/>
		</svg>
	