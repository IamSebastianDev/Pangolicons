
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
			class="pangolicons pangolicons-cloudSun {className}"
		>
			<path  d="M5.84,20.48h9a3.49,3.49,0,1,0-1.42-6.67,5.23,5.23,0,1,0-7.58,6.67Z"/><path  d="M10.76,8.6a3.29,3.29,0,0,1,5.62,2.33"/><line  x1="13.09" y1="3.52" x2="13.09" y2="5.16"/><line  x1="20.5" y1="10.93" x2="18.85" y2="10.93"/><line  x1="8.15" y1="5.99" x2="9.11" y2="6.95"/><line  x1="18.03" y1="5.99" x2="17.21" y2="6.81"/>
		</svg>
	