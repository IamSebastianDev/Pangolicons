
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
			class="pangolicons pangolicons-zoomIn {className}"
		>
			<circle  cx="14.86" cy="9.14" r="7.14"/><path  d="M9.35,14.65,2,22Z"/><line  x1="12" y1="9.14" x2="18.2" y2="9.14"/><line  x1="15.1" y1="12.24" x2="15.1" y2="6.04"/>
		</svg>
	