
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
			class="pangolicons pangolicons-refreshCW {className}"
		>
			<path  d="M19,10.42a7.13,7.13,0,0,1,.22,1.73,6.93,6.93,0,0,1-11.83,4.9m.83,3.45-.83-3.45m.06,0,3.25-1.19"/><path  d="M5,13.58a7.13,7.13,0,0,1-.22-1.73A6.93,6.93,0,0,1,16.61,7M15.78,3.5,16.61,7m-.06,0L13.3,8.14"/>
		</svg>
	