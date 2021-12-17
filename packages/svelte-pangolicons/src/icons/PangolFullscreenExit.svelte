
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
			class="pangolicons pangolicons-fullscreenExit {className}"
		>
			<polyline  points="7.5 4.5 7.5 7.5 4.5 7.5"/><polyline  points="16.5 4.5 16.5 7.5 19.5 7.5"/><polyline  points="7.5 19.5 7.5 16.5 4.5 16.5"/><polyline  points="16.5 19.5 16.5 16.5 19.5 16.5"/>
		</svg>
	