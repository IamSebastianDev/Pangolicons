
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
			class="pangolicons pangolicons-bold {className}"
		>
			<path  d="M6.46,4.57A.56.56,0,0,1,7,4h6.27a3.74,3.74,0,0,1,3.41,4,3.74,3.74,0,0,1-3.41,4H6.46Z"/><path  d="M6.46,12.57A.56.56,0,0,1,7,12h7.12a3.74,3.74,0,0,1,3.41,4,3.74,3.74,0,0,1-3.41,4H7a.56.56,0,0,1-.55-.57Z"/>
		</svg>
	