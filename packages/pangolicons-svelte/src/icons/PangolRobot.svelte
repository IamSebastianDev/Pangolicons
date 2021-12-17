
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
			class="pangolicons pangolicons-robot {className}"
		>
			<rect  x="4" y="12" width="16" height="8" rx="1.15"/><circle  cx="12" cy="6" r="2"/><line  x1="12" y1="8" x2="12" y2="12"/><circle  cx="9" cy="16" r="0.5"/><circle  cx="15" cy="16" r="0.5"/>
		</svg>
	