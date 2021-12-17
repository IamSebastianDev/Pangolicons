
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
			class="pangolicons pangolicons-cloudHail {className}"
		>
			<path  d="M16.5,15.44a4,4,0,1,0,0-8,4,4,0,0,0-1.62.35,6,6,0,1,0-8.7,7.65"/><line  x1="11.5" y1="13.81" x2="11.5" y2="15.31"/><line  x1="9" y1="14.81" x2="9" y2="16.31"/><line  x1="14" y1="15.81" x2="14" y2="17.31"/><line  x1="11.5" y1="17.56" x2="11.5" y2="17.56"/><line  x1="9" y1="18.56" x2="9" y2="18.56"/><line  x1="14" y1="19.56" x2="14" y2="19.56"/>
		</svg>
	