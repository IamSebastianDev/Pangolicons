
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
			class="pangolicons pangolicons-shuffle {className}"
		>
			<line  x1="2" y1="22" x2="22" y2="2"/><polyline  points="22 15.53 22 22 15.53 22"/><polyline  points="15.53 2 22 2 22 8.47"/><line  x1="9.21" y1="9.21" x2="2" y2="2"/><line  x1="22" y1="22" x2="14.95" y2="14.95"/>
		</svg>
	