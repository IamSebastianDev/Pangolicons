
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
			class="pangolicons pangolicons-heart {className}"
		>
			<path  d="M12,8.39A4.33,4.33,0,0,0,7.68,4H7.6c-3,0-4.64,3.78-2.85,6.29L12,20l7.43-9.77C21,7.63,19.3,4.05,16.3,4h-.07A4.34,4.34,0,0,0,12,8.39"/>
		</svg>
	