
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
			class="pangolicons pangolicons-camera {className}"
		>
			<path  d="M16.87,7.22h2a1.6,1.6,0,0,1,1.6,1.6v8.49a1.6,1.6,0,0,1-1.6,1.6H5.1a1.6,1.6,0,0,1-1.6-1.6V8.82a1.6,1.6,0,0,1,1.6-1.6h2L10.3,5.09h3.4l3.17,2.13"/><circle  cx="12" cy="12.53" r="2.66"/>
		</svg>
	