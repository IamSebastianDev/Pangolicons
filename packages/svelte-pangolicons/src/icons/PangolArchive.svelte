
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
			class="pangolicons pangolicons-archive {className}"
		>
			<path  d="M19,8.5H5a1,1,0,0,1-1-1v-1a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1v1A1,1,0,0,1,19,8.5ZM5.5,8.5v8.42A1.58,1.58,0,0,0,7.08,18.5h9.84a1.58,1.58,0,0,0,1.58-1.58V8.5M9,11.5h6"/>
		</svg>
	