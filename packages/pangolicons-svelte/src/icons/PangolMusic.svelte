
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
			class="pangolicons pangolicons-music {className}"
		>
			<circle  cx="6" cy="18.17" r="2.5"/><polyline  points="8.5 18.33 8.5 5.56 20.5 3.33 20.5 16.09"/><circle  cx="18" cy="15.99" r="2.5"/>
		</svg>
	