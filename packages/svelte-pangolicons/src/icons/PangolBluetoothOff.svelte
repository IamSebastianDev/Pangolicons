
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
			class="pangolicons pangolicons-bluetoothOff {className}"
		>
			<path  d="M14.69,18l-3.18,2V4l6.36,4-6.36,4m-4.4,2.7,4.4-2.7,6.36-4"/><line  x1="4" y1="4" x2="20" y2="20"/>
		</svg>
	