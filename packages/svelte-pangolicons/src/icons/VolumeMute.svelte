
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
			class="pangolicons pangolicons-volumeMute {className}"
		>
			<rect  x="2" y="8.46" width="4.25" height="7.08"/><polygon  points="11.91 2.79 6.25 8.46 6.25 15.54 11.91 21.21 11.91 2.79"/><line  x1="15.99" y1="15" x2="22" y2="9"/><line  x1="15.99" y1="9" x2="22" y2="15"/>
		</svg>
	