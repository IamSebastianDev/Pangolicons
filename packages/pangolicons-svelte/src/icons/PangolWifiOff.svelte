
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
			class="pangolicons pangolicons-wifiOff {className}"
		>
			<circle  cx="12.01" cy="16.53" r="0.6"/><path  d="M13.91,13.45a3.52,3.52,0,0,1,1.1,1"/><path  d="M16.18,11.36A6.69,6.69,0,0,1,17.5,12.8"/><path  d="M6.5,12.81A6.63,6.63,0,0,1,10.87,10"/><path  d="M18.19,9.1a9.84,9.84,0,0,1,1.81,2"/><path  d="M4,11.13a9.66,9.66,0,0,1,8-4.26,9.36,9.36,0,0,1,1.41.1"/><line  x1="18" y1="6" x2="6" y2="18"/>
		</svg>
	