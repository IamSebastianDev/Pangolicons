
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
			class="pangolicons pangolicons-fader {className}"
		>
			<line  x1="12" y1="10.69" x2="12" y2="20"/><line  x1="12" y1="4" x2="12" y2="7.69"/><rect  x="9" y="7.69" width="6" height="3"/>
		</svg>
	