
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
			class="pangolicons pangolicons-refreshCCW {className}"
		>
			<path  d="M19,13.58a7.13,7.13,0,0,0,.22-1.73A6.93,6.93,0,0,0,7.39,7M8.22,3.5,7.39,7m.06,0L10.7,8.14"/><path  d="M5,10.42a7.13,7.13,0,0,0-.22,1.73,6.93,6.93,0,0,0,11.83,4.9m-.83,3.45.83-3.45m-.06,0L13.3,15.86"/>
		</svg>
	