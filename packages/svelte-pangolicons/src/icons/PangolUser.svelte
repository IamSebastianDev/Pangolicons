
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
			class="pangolicons pangolicons-user {className}"
		>
			<path  d="M5.16,19.5V16.84A1.73,1.73,0,0,1,6.75,15h10.5a1.73,1.73,0,0,1,1.59,1.82V19.5"/><circle  cx="12" cy="8.18" r="3.68"/>
		</svg>
	