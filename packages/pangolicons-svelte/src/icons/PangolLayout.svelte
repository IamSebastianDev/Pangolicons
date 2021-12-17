
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
			class="pangolicons pangolicons-layout {className}"
		>
			<path  d="M18.6,19H5.4A1.39,1.39,0,0,1,4,17.6V6.4A1.39,1.39,0,0,1,5.4,5H18.6A1.39,1.39,0,0,1,20,6.4V17.6A1.39,1.39,0,0,1,18.6,19ZM9,19V5m11,5.52H9"/>
		</svg>
	