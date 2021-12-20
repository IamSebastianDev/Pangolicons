
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
			class="pangolicons pangolicons-download {className}"
		>
			<polyline  points="7.8 11.92 12 16.12 16.2 11.92 12 16.12 12 3.18"/><path  d="M22,16.12v2.94a1.76,1.76,0,0,1-1.76,1.76H3.76A1.76,1.76,0,0,1,2,19.06V16.12"/>
		</svg>
	