
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
			class="pangolicons pangolicons-layers {className}"
		>
			<polyline  points="2.14 16.34 12.07 21.31 22 16.34"/><polyline  points="2 12 11.93 16.96 21.86 12"/><polygon  points="21.86 7.66 11.93 2.69 2 7.66 11.93 12.62 21.86 7.66"/>
		</svg>
	