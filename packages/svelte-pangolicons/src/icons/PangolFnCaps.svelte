
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
			class="pangolicons pangolicons-fnCaps {className}"
		>
			<rect  x="3.5" y="3.5" width="17" height="17" rx="1.5"/><polygon  points="17 10.79 12 7 7 10.79 9.84 10.79 9.84 14.36 14.16 14.36 14.16 10.79 17 10.79"/><line  x1="9.83" y1="17" x2="14.17" y2="17"/>
		</svg>
	