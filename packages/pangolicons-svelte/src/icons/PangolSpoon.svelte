
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
			class="pangolicons pangolicons-spoon {className}"
		>
			<path  d="M18.54,5.46c-1.06-1.07-3.66-.21-5.79,1.93s-2,3.76-1,4.82,2.69,1.17,4.82-1S19.61,6.52,18.54,5.46Zm-6.75,6.75L5,19"/>
		</svg>
	