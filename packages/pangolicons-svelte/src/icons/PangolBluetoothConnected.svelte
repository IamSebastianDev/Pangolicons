
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
			class="pangolicons pangolicons-bluetoothConnected {className}"
		>
			<polygon  points="11.84 20 11.84 12 11.84 4 18.19 8 11.84 12 18.19 16 11.84 20"/><polyline  points="7.44 14.7 11.84 12 18.19 8"/><polyline  points="7.44 9 11.84 12 18.19 16"/><line  x1="6.79" y1="12" x2="4" y2="12"/><line  x1="20" y1="12" x2="17.21" y2="12"/>
		</svg>
	