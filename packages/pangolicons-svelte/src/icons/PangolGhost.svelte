
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
			class="pangolicons pangolicons-ghost {className}"
		>
			<path  d="M12,19.4l2.3,1.1,2.13-1.06,1.95,1.06V9.88a6.38,6.38,0,1,0-12.76,0V20.5l2-1.06L9.7,20.5Z"/><circle  cx="13.98" cy="8.61" r="0.25"/><circle  cx="9.98" cy="8.61" r="0.25"/>
		</svg>
	