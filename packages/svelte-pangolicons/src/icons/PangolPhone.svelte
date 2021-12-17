
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
			class="pangolicons pangolicons-phone {className}"
		>
			<path  d="M7.21,17C.93,10.05,4.52,3.56,4.52,3.56H8.11L9,7.15,7.21,8.94s-1.79.9,2.69,5.38M7.21,17c7.13,6.09,13.29,2.19,13.29,2.19l-.1-3.58-3.61-.81-1.74,1.84s-.55,2-5.15-2.34"/>
		</svg>
	