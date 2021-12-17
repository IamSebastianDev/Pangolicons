
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
			class="pangolicons pangolicons-form {className}"
		>
			<path  d="M13.1,4V9.71h5.47L13.1,4H7A1.56,1.56,0,0,0,5.43,5.59V18.41A1.56,1.56,0,0,0,7,20H17a1.56,1.56,0,0,0,1.53-1.59V9.71Z"/><line  x1="9.14" y1="13.14" x2="14.86" y2="13.14"/><line  x1="9.14" y1="16.57" x2="14.86" y2="16.57"/>
		</svg>
	