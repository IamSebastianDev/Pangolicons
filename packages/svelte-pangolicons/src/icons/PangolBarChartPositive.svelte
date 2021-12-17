
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
			class="pangolicons pangolicons-barChartPositive {className}"
		>
			<line  x1="18.38" y1="3.5" x2="18.38" y2="20.5"/><line  x1="5.62" y1="15" x2="5.62" y2="20.5"/><line  x1="9.88" y1="20.5" x2="9.88" y2="12.19"/><line  x1="14.12" y1="20.5" x2="14.12" y2="8"/>
		</svg>
	