
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
			class="pangolicons pangolicons-display {className}"
		>
			<path  d="M20,14.11a1.39,1.39,0,0,1-1.39,1.39H5.39A1.39,1.39,0,0,1,4,14.11V5.89A1.39,1.39,0,0,1,5.39,4.5H18.61A1.39,1.39,0,0,1,20,5.89Z"/><polygon  points="12 19.5 8 19.5 16 19.5 12 19.5"/><line  x1="12" y1="15.5" x2="12" y2="19.5"/>
		</svg>
	