
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
			class="pangolicons pangolicons-icecream {className}"
		>
			<path  d="M4.64,12l8.84-8.84a3.92,3.92,0,0,1,5.53,0L20.86,5a3.92,3.92,0,0,1,0,5.53L12,19.36Z"/><line  x1="8.33" y1="15.67" x2="2" y2="22"/>
		</svg>
	