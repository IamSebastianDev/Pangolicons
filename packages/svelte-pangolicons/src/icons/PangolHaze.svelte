
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
			class="pangolicons pangolicons-haze {className}"
		>
			<line  x1="8.36" y1="6.54" x2="19.29" y2="6.54"/><line  x1="3.5" y1="10.18" x2="14.43" y2="10.18"/><line  x1="3.5" y1="13.82" x2="20.5" y2="13.82"/><line  x1="5.71" y1="17.46" x2="19.06" y2="17.46"/>
		</svg>
	