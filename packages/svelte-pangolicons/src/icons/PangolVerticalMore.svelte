
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
			class="pangolicons pangolicons-verticalMore {className}"
		>
			<rect  x="11.5" y="6.5" width="1" height="1"/><rect  x="11.5" y="11.5" width="1" height="1"/><rect  x="11.5" y="16.5" width="1" height="1"/>
		</svg>
	