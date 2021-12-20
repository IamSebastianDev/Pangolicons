
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
			class="pangolicons pangolicons-headingIncrease {className}"
		>
			<polyline  points="19.14 3.43 2 3.43 10.57 3.43 10.57 20.57"/><polyline  points="22 13.43 19.14 10.57 16.29 13.43 19.14 10.57 19.14 20.57"/>
		</svg>
	