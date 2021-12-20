
		<script>
			let className = '';
			let size = '24';
			let strokeWidth = '1.5';
			let color = "currentColor";
			let linejoin = "round";
			let linecap = "round";

			export let attributes = { className, size, strokeWidth, color, linejoin, linecap };
			$: ({ className, size, strokeWidth, color, linejoin, linecap } = attributes);
		</script>

		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			fill="none"
			viewBox="0 0 24 24"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap={linecap}
			stroke-linejoin={linejoin}
			class="pangolicons pangolicons-shield {className}"
		>
			<path  d="M14,21.05a33.42,33.42,0,0,0,6.84-15.3,2.31,2.31,0,0,0-2-2.54L12.49,2a3.22,3.22,0,0,0-1,0L5.14,3.21a2.31,2.31,0,0,0-2,2.54A33.42,33.42,0,0,0,10,21.05,2.64,2.64,0,0,0,14,21.05Z"/>
		</svg>
	