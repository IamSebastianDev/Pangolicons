
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
			class="pangolicons pangolicons-bluetoothSearching {className}"
		>
			<polygon  points="10.36 20 10.36 12 10.36 4 16.71 8 10.36 12 16.71 16 10.36 20"/><polyline  points="5.96 14.7 10.36 12 16.71 8"/><polyline  points="5.96 9 10.36 12 16.71 16"/><path  d="M18.2,10.15a2.5,2.5,0,0,1-.07,3.76"/><circle  cx="15.75" cy="12" r="0.25"/>
		</svg>
	