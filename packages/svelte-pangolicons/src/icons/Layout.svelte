
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
			class="pangolicons pangolicons-layout {className}"
		>
			<path  d="M20.6,20.75H3.4A1.39,1.39,0,0,1,2,19.35V4.65a1.39,1.39,0,0,1,1.4-1.4H20.6A1.39,1.39,0,0,1,22,4.65v14.7A1.39,1.39,0,0,1,20.6,20.75Zm-12.35,0V3.25M22,10.15H8.25"/>
		</svg>
	