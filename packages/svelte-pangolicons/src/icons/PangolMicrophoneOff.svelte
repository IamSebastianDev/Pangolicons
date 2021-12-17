
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
			class="pangolicons pangolicons-microphoneOff {className}"
		>
			<path  d="M10.29,10.13V5.5A1.5,1.5,0,0,1,11.79,4h.42a1.5,1.5,0,0,1,1.5,1.5M12,16a4.58,4.58,0,0,0,4.57-4.57m-9.14,0a4.66,4.66,0,0,0,.14,1.13M12,16V20m1.71.05H10.29"/><line  x1="6" y1="18" x2="18" y2="6"/>
		</svg>
	