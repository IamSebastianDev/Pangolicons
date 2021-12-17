
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
			class="pangolicons pangolicons-creditcard {className}"
		>
			<path  d="M19,18.5H5A1.5,1.5,0,0,1,3.5,17V8A1.5,1.5,0,0,1,5,6.5H19A1.5,1.5,0,0,1,20.5,8v9A1.5,1.5,0,0,1,19,18.5Z"/><line  x1="3.5" y1="10.67" x2="20.5" y2="10.67"/>
		</svg>
	