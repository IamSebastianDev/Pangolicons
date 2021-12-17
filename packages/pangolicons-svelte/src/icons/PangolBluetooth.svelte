
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
			class="pangolicons pangolicons-bluetooth {className}"
		>
			<polygon  points="11.51 20 11.51 12 11.51 4 17.87 8 11.51 12 17.87 16 11.51 20"/><polyline  points="7.11 14.7 11.51 12 17.87 8"/><polyline  points="7.11 9 11.51 12 17.87 16"/>
		</svg>
	