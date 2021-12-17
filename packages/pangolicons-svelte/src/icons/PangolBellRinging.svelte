
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
			class="pangolicons pangolicons-bellRinging {className}"
		>
			<path  d="M12,4.5a3.91,3.91,0,0,1,3.91,3.91s-.1,7.82,3.3,8.77H4.79c3.4-.95,3.3-8.77,3.3-8.77A3.91,3.91,0,0,1,12,4.5M9.48,20a6.51,6.51,0,0,0,5,0M19,8.5a7.64,7.64,0,0,0-2-5M5.15,8.5a6.4,6.4,0,0,1,2-5"/>
		</svg>
	