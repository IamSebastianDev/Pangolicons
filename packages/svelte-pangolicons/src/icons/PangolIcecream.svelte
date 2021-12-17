
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
			class="pangolicons pangolicons-icecream {className}"
		>
			<path  d="M6.11,12l7.07-7.07a3.16,3.16,0,0,1,4.43,0l1.48,1.48a3.16,3.16,0,0,1,0,4.43L12,17.89Z"/><line  x1="9.06" y1="14.94" x2="4" y2="20"/>
		</svg>
	