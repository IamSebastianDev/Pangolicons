
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
			class="pangolicons pangolicons-wind {className}"
		>
			<path  d="M8.88,4a2.66,2.66,0,1,1,1.53,4.83H3.5"/><path  d="M16.32,7.17A2.66,2.66,0,1,1,17.84,12H3.5"/><path  d="M12.07,20a2.66,2.66,0,1,0,1.52-4.83H3.5"/>
		</svg>
	