
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
			class="pangolicons pangolicons-userMultiple {className}"
		>
			<path  d="M3,19.41V16.78A1.7,1.7,0,0,1,4.56,15H14.94a1.7,1.7,0,0,1,1.56,1.8v2.63"/><circle  cx="9.75" cy="8.23" r="3.64"/><path  d="M19.44,15A1.7,1.7,0,0,1,21,16.78v2.63"/><path  d="M15.31,4.59a3.64,3.64,0,0,1,0,7.27"/>
		</svg>
	