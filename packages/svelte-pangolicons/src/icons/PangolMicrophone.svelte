
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
			class="pangolicons pangolicons-microphone {className}"
		>
			<path  d="M12.21,13.14h-.42a1.5,1.5,0,0,1-1.5-1.5V5.5A1.5,1.5,0,0,1,11.79,4h.42a1.5,1.5,0,0,1,1.5,1.5v6.14A1.5,1.5,0,0,1,12.21,13.14ZM7.43,11.43a4.57,4.57,0,0,0,9.14,0M12,16V20m1.71.05H10.29"/>
		</svg>
	