
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
			class="pangolicons pangolicons-library {className}"
		>
			<line  x1="5.13" y1="2" x2="5.13" y2="22"/><line  x1="8.88" y1="22" x2="8.88" y2="7"/><line  x1="12.63" y1="22" x2="12.63" y2="4.5"/><line  x1="18.88" y1="22" x2="16.38" y2="7"/>
		</svg>
	