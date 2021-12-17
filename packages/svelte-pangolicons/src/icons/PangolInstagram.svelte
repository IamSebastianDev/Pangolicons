
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
			class="pangolicons pangolicons-instagram {className}"
		>
			<rect  x="3.5" y="3.5" width="17" height="17" rx="3.73"/><circle  cx="12" cy="12" r="3.78"/><circle  cx="17.19" cy="6.81" r="0.47"/>
		</svg>
	