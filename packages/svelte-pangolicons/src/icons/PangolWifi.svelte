
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
			class="pangolicons pangolicons-wifi {className}"
		>
			<circle  cx="12.01" cy="16.53" r="0.6"/><path  d="M9,14.5a3.63,3.63,0,0,1,6,0"/><path  d="M6.5,12.81a6.65,6.65,0,0,1,11,0"/><path  d="M4,11.13a9.66,9.66,0,0,1,16,0"/>
		</svg>
	