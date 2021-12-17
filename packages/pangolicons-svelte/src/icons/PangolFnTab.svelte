
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
			class="pangolicons pangolicons-fnTab {className}"
		>
			<rect  x="3.5" y="3.5" width="17" height="17" rx="1.5"/><polyline  points="12.11 15 14.88 12 12.11 9"/><line  x1="14.88" y1="12" x2="6.88" y2="12"/><line  x1="17.13" y1="9" x2="17.13" y2="15"/>
		</svg>
	