
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
			class="pangolicons pangolicons-download {className}"
		>
			<polyline  points="8.43 11.93 12 15.5 15.57 11.93 12 15.5 12 4.5"/><path  d="M20.5,15.5V18A1.5,1.5,0,0,1,19,19.5H5A1.5,1.5,0,0,1,3.5,18V15.5"/>
		</svg>
	