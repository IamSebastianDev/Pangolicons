
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
			class="pangolicons pangolicons-skipForward {className}"
		>
			<polygon  points="16.33 12 6.51 20.5 6.51 3.5 16.33 12"/><line  x1="17.48" y1="20.5" x2="17.48" y2="3.5"/>
		</svg>
	