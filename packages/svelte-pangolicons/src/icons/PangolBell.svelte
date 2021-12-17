
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
			class="pangolicons pangolicons-bell {className}"
		>
			<path  d="M12,4a3.91,3.91,0,0,1,3.91,3.91s-.1,7.82,3.3,8.77H4.79c3.4-.95,3.3-8.77,3.3-8.77A3.91,3.91,0,0,1,12,4M9.48,19.48a6.51,6.51,0,0,0,5,0"/>
		</svg>
	