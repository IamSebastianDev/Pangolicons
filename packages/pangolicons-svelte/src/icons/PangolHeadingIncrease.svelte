
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
			class="pangolicons pangolicons-headingIncrease {className}"
		>
			<polyline  points="17.71 5.14 4 5.14 10.86 5.14 10.86 18.86"/><polyline  points="20 13.14 17.71 10.86 15.43 13.14 17.71 10.86 17.71 18.86"/>
		</svg>
	