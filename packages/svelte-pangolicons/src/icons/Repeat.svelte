
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
			class="pangolicons pangolicons-repeat {className}"
		>
			<path  d="M20.13,5.8H9.22a5.35,5.35,0,0,0-5.35,5.35h0"/><polyline  points="16.33 9.6 20.13 5.8 16.33 2"/><path  d="M3.87,18.2H14.78a5.35,5.35,0,0,0,5.35-5.35h0"/><polyline  points="7.67 14.4 3.87 18.2 7.67 22"/>
		</svg>
	