
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
			class="pangolicons pangolicons-cloudLightning {className}"
		>
			<path  d="M17.29,15.82a4.71,4.71,0,1,0-1.91-9,7.05,7.05,0,1,0-10.22,9"/><polyline  points="12.59 10.53 10.23 14.06 12.59 17.59 10.23 21.12"/>
		</svg>
	