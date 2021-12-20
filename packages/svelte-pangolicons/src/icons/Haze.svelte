
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
			class="pangolicons pangolicons-haze {className}"
		>
			<line  x1="7.71" y1="5.57" x2="20.57" y2="5.57"/><line  x1="2" y1="9.86" x2="14.86" y2="9.86"/><line  x1="2" y1="14.14" x2="22" y2="14.14"/><line  x1="4.6" y1="18.43" x2="20.31" y2="18.43"/>
		</svg>
	