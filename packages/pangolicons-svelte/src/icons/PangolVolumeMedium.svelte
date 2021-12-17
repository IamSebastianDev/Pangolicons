
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
			class="pangolicons pangolicons-volumeMedium {className}"
		>
			<rect  x="6.63" y="10.37" width="3" height="5"/><polygon  points="13.63 6.38 9.63 10.38 9.63 15.38 13.63 19.38 13.63 6.38"/><path  d="M16.62,9.87a6.37,6.37,0,0,1,0,6"/>
		</svg>
	