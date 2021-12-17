
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
			class="pangolicons pangolicons-castToMedia {className}"
		>
			<path  d="M3.5,11V5A1.5,1.5,0,0,1,5,3.5H19A1.5,1.5,0,0,1,20.5,5V19A1.5,1.5,0,0,1,19,20.5H13"/><circle  cx="4" cy="20" r="0.25"/><path  d="M3.5,17A2.74,2.74,0,0,1,4,17a3,3,0,0,1,3,3,2.74,2.74,0,0,1,0,.5"/><path  d="M3.5,14,4,14a6,6,0,0,1,6,6c0,.17,0,.33,0,.5"/>
		</svg>
	