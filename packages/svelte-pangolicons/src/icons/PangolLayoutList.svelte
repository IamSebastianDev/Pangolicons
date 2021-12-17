
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
			class="pangolicons pangolicons-layoutList {className}"
		>
			<rect  x="3.5" y="3.5" width="17" height="17" rx="1.5"/><line  x1="7.75" y1="7.87" x2="16.25" y2="7.87"/><line  x1="7.75" y1="12.13" x2="16.25" y2="12.13"/><line  x1="7.75" y1="16.13" x2="16.25" y2="16.13"/>
		</svg>
	