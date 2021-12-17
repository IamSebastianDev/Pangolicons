
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
			class="pangolicons pangolicons-volumeLow {className}"
		>
			<rect  x="8.5" y="9.5" width="3" height="5"/><polygon  points="15.5 5.5 11.5 9.5 11.5 14.5 15.5 18.5 15.5 5.5"/>
		</svg>
	