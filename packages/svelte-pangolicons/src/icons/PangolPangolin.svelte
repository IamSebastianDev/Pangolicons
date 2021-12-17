
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
			class="pangolicons pangolicons-pangolin {className}"
		>
			<path  d="M7,5s6,1,3,3L3,12a9,9,0,1,1,9,9H7l9-5"/><path  d="M12,10s-4,3-3,5c0,0,3-2,5-1"/>
		</svg>
	