
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
			class="pangolicons pangolicons-cloudFog {className}"
		>
			<path  d="M16.5,16a4,4,0,0,0,0-8,4,4,0,0,0-1.62.35A6,6,0,1,0,6.18,16"/><line  x1="7" y1="13.04" x2="16" y2="13.04"/><line  x1="9" y1="16.04" x2="14" y2="16.04"/><line  x1="7" y1="19.04" x2="18" y2="19.04"/>
		</svg>
	