
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
			class="pangolicons pangolicons-sliders {className}"
		>
			<line  x1="12" y1="16.35" x2="12" y2="20.03"/><line  x1="12" y1="3.97" x2="12" y2="13.42"/><line  x1="18.61" y1="10.58" x2="18.61" y2="20.03"/><line  x1="18.61" y1="3.97" x2="18.61" y2="7.85"/><line  x1="5.39" y1="11.06" x2="5.39" y2="20.03"/><line  x1="5.39" y1="3.97" x2="5.39" y2="8.69"/><line  x1="3.5" y1="11.06" x2="7.28" y2="11.06"/><line  x1="10.11" y1="16.35" x2="13.89" y2="16.35"/><line  x1="16.72" y1="7.85" x2="20.5" y2="7.85"/>
		</svg>
	