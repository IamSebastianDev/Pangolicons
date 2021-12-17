
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
			class="pangolicons pangolicons-cloudMoon {className}"
		>
			<path  d="M5.55,19h7.87a3.06,3.06,0,1,0-1.24-5.84A4.58,4.58,0,1,0,5.55,19Z"/><path  d="M12,9.34a4.57,4.57,0,0,1,.14-1.22"/><path  d="M12.15,8.12A4.35,4.35,0,0,1,15.73,5a3.67,3.67,0,0,0,4.77,5.51,4.33,4.33,0,0,1-2.09,2.59"/>
		</svg>
	