
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
			class="pangolicons pangolicons-star {className}"
		>
			<polygon  points="12 3.92 14.63 9.24 20.5 10.09 16.25 14.23 17.25 20.08 12 17.32 6.75 20.08 7.75 14.23 3.5 10.09 9.37 9.24 12 3.92"/>
		</svg>
	