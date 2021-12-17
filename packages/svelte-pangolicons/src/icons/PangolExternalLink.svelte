
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
			class="pangolicons pangolicons-externalLink {className}"
		>
			<path  d="M20,12v6.6A1.39,1.39,0,0,1,18.6,20H5.4A1.39,1.39,0,0,1,4,18.6V5.4A1.39,1.39,0,0,1,5.4,4H12m0,8,8-8H16m4,0V7.35"/>
		</svg>
	