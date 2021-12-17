
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
			class="pangolicons pangolicons-refresh {className}"
		>
			<path  d="M5.06,11.11A6.54,6.54,0,0,0,5,12a7,7,0,1,0,7-7C9.91,5,8.28,6.54,7,8M7,8l.82-4.2M7,8l3.29.44"/>
		</svg>
	