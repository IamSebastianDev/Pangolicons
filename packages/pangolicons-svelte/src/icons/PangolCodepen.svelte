
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
			class="pangolicons pangolicons-codepen {className}"
		>
			<polygon  points="3.5 9.17 12 14.83 20.5 9.17 12 3.5 3.5 9.17"/><polygon  points="3.5 14.83 12 20.5 20.5 14.83 12 9.17 3.5 14.83"/><line  x1="3.5" y1="9.17" x2="3.5" y2="14.83"/><line  x1="12" y1="14.83" x2="12" y2="20.5"/><line  x1="20.5" y1="9.17" x2="20.5" y2="14.83"/><line  x1="12" y1="3.5" x2="12" y2="9.17"/>
		</svg>
	