
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
			class="pangolicons pangolicons-wind {className}"
		>
			<path  d="M8.33,2.57a3.12,3.12,0,1,1,1.79,5.68H2"/><path  d="M17.08,6.32A3.12,3.12,0,1,1,18.87,12H2"/><path  d="M12.08,21.43a3.12,3.12,0,1,0,1.79-5.68H2"/>
		</svg>
	