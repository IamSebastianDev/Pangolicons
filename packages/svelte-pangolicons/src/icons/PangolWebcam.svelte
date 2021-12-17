
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
			class="pangolicons pangolicons-webcam {className}"
		>
			<circle  cx="12" cy="9.5" r="2"/><circle  cx="12" cy="9.5" r="6"/><line  x1="12" y1="15.5" x2="12" y2="20.5"/><line  x1="7.5" y1="20.5" x2="16.5" y2="20.5"/>
		</svg>
	