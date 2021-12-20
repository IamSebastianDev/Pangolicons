
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
			class="pangolicons pangolicons-cloudSnow {className}"
		>
			<path  d="M17.29,16.05a4.71,4.71,0,1,0-1.91-9,7.05,7.05,0,1,0-10.22,9"/><line  x1="11.41" y1="15.01" x2="11.41" y2="15.01"/><line  x1="8.47" y1="16.19" x2="8.47" y2="16.19"/><line  x1="14.35" y1="17.37" x2="14.35" y2="17.37"/><line  x1="11.41" y1="18.54" x2="11.41" y2="18.54"/><line  x1="8.47" y1="19.72" x2="8.47" y2="19.72"/><line  x1="14.35" y1="20.9" x2="14.35" y2="20.9"/>
		</svg>
	