
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
			class="pangolicons pangolicons-settings {className}"
		>
			<circle  cx="8.03" cy="6.9" r="0.57"/><rect  x="4.07" y="3.5" width="15.87" height="6.8" rx="3.4"/><circle  cx="15.97" cy="17.1" r="0.57"/><rect  x="4.07" y="13.7" width="15.87" height="6.8" rx="3.4" transform="translate(24 34.2) rotate(180)"/>
		</svg>
	