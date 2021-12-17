
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
			class="pangolicons pangolicons-userRemove {className}"
		>
			<path  d="M3.58,19.5V16.84A1.72,1.72,0,0,1,5.17,15h10.5a1.72,1.72,0,0,1,1.58,1.82V19.5"/><circle  cx="10.42" cy="8.18" r="3.68"/><line  x1="16.42" y1="11" x2="20.42" y2="11"/>
		</svg>
	