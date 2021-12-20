
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
			class="pangolicons pangolicons-umbrella {className}"
		>
			<path  d="M2.59,11.41a9.41,9.41,0,0,1,18.82,0H2.59Z"/><path  d="M16.71,19.88A2.25,2.25,0,0,1,14.35,22,2.24,2.24,0,0,1,12,19.88V11.41"/>
		</svg>
	