
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
			class="pangolicons pangolicons-horizontalMore {className}"
		>
			<rect  x="2" y="11.09" width="1.82" height="1.82" transform="translate(-9.09 14.91) rotate(-90)"/><rect  x="11.09" y="11.09" width="1.82" height="1.82" transform="translate(0 24) rotate(-90)"/><rect  x="20.18" y="11.09" width="1.82" height="1.82" transform="translate(9.09 33.09) rotate(-90)"/>
		</svg>
	