
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
			class="pangolicons pangolicons-snowflake {className}"
		>
			<line  x1="12" y1="20.46" x2="12" y2="12"/><line  x1="12" y1="20.5" x2="12" y2="20.46"/><polyline  points="13.89 19.56 12 17.67 10.11 19.56"/><line  x1="12" y1="3.54" x2="12" y2="12"/><line  x1="12" y1="3.5" x2="12" y2="3.54"/><polyline  points="13.89 4.44 12 6.33 10.11 4.44"/><line  x1="20.46" y1="12" x2="12" y2="12"/><line  x1="20.5" y1="12" x2="20.46" y2="12"/><polyline  points="19.56 10.11 17.67 12 19.56 13.89"/><line  x1="3.54" y1="12" x2="12" y2="12"/><line  x1="3.5" y1="12" x2="3.54" y2="12"/><polyline  points="4.44 10.11 6.33 12 4.44 13.89"/><line  x1="16" y1="16" x2="12" y2="12"/><line  x1="18.01" y1="18.01" x2="17.98" y2="17.98"/><line  x1="8" y1="8" x2="12" y2="12"/><line  x1="5.99" y1="5.99" x2="6.02" y2="6.02"/><line  x1="16" y1="8" x2="12" y2="12"/><line  x1="18.01" y1="5.99" x2="17.98" y2="6.02"/><line  x1="8" y1="16" x2="12" y2="12"/><line  x1="5.99" y1="18.01" x2="6.02" y2="17.98"/>
		</svg>
	