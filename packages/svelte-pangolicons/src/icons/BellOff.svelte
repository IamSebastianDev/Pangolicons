
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
			class="pangolicons pangolicons-bellOff {className}"
		>
			<path  d="M8.75,3.24A4.86,4.86,0,0,1,12,2m.12,15.85H3c2.36-.66,3.5-3.88,4-6.68M12,2a4.89,4.89,0,0,1,4.89,4.89,27.52,27.52,0,0,0,.63,5.82M8.86,21.35a8.1,8.1,0,0,0,6.28,0"/><line  x1="2.62" y1="2.62" x2="21.38" y2="21.38"/>
		</svg>
	