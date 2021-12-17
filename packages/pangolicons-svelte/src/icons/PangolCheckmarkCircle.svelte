
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
			class="pangolicons pangolicons-checkmarkCircle {className}"
		>
			<polyline  points="20.01 5.5 10.51 14.5 7.99 11.85"/><path  d="M21,12a9,9,0,1,1-9-9,9.09,9.09,0,0,1,3.27.61"/>
		</svg>
	