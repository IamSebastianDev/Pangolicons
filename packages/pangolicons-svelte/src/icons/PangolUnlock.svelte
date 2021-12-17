
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
			class="pangolicons pangolicons-unlock {className}"
		>
			<path  d="M17.07,20H6.93a1.59,1.59,0,0,1-1.59-1.59v-5.3a1.59,1.59,0,0,1,1.59-1.59H17.07a1.59,1.59,0,0,1,1.59,1.59v5.3A1.59,1.59,0,0,1,17.07,20ZM16.81,6.67A4.85,4.85,0,1,0,8.15,11"/><circle  cx="15.5" cy="14.5" r="0.5"/>
		</svg>
	