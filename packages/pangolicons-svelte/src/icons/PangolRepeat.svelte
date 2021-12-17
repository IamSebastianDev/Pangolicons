
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
			class="pangolicons pangolicons-repeat {className}"
		>
			<path  d="M18.91,6.73H9.64a4.55,4.55,0,0,0-4.55,4.54h0"/><polyline  points="15.68 9.96 18.91 6.73 15.68 3.5"/><path  d="M5.09,17.27h9.27a4.55,4.55,0,0,0,4.55-4.54h0"/><polyline  points="8.32 14.04 5.09 17.27 8.32 20.5"/>
		</svg>
	