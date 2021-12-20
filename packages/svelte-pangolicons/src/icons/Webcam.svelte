
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
			class="pangolicons pangolicons-webcam {className}"
		>
			<circle  cx="12" cy="9.06" r="2.35"/><circle  cx="12" cy="9.06" r="7.06"/><line  x1="12" y1="16.12" x2="12" y2="22"/><line  x1="6.71" y1="22" x2="17.29" y2="22"/>
		</svg>
	