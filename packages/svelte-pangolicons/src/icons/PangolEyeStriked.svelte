
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
			class="pangolicons pangolicons-eyeStriked {className}"
		>
			<path  d="M13.64,17.66a8.85,8.85,0,0,1-1.64.16c-5,0-9-4.66-9-5.82,0-.55.9-1.89,2.38-3.14"/><path  d="M10.61,6.3A8,8,0,0,1,12,6.18c5,0,9,4.66,9,5.82,0,.59-1.05,2.1-2.74,3.43"/><circle  cx="12" cy="12" r="2.65"/><line  x1="5.38" y1="4.5" x2="18.62" y2="19.5"/>
		</svg>
	