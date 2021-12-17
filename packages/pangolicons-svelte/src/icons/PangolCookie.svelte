
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
			class="pangolicons pangolicons-cookie {className}"
		>
			<path  d="M19,10.5a2.35,2.35,0,0,1,.06-.54A3.5,3.5,0,0,1,16,6.5a3.66,3.66,0,0,1,.05-.57A2.43,2.43,0,0,1,15.5,6,2.49,2.49,0,0,1,13,3.57a8.5,8.5,0,1,0,7.45,9.2A2.5,2.5,0,0,1,19,10.5Z"/><circle  cx="9.5" cy="8.5" r="0.25"/><circle  cx="8.5" cy="15.5" r="0.25"/><circle  cx="14.5" cy="13.5" r="0.25"/>
		</svg>
	