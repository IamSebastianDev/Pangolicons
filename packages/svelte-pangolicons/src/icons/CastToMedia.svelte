
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
			class="pangolicons pangolicons-castToMedia {className}"
		>
			<path  d="M2,10.82v-7A1.77,1.77,0,0,1,3.77,2H20.23A1.77,1.77,0,0,1,22,3.77V20.23A1.77,1.77,0,0,1,20.23,22h-7"/><circle  cx="2.59" cy="21.41" r="0.29"/><path  d="M2,17.93a3.81,3.81,0,0,1,.59-.05,3.53,3.53,0,0,1,3.53,3.53,3.81,3.81,0,0,1,0,.59"/><path  d="M2,14.38a5.83,5.83,0,0,1,.59,0,7.06,7.06,0,0,1,7.06,7.06,5.83,5.83,0,0,1,0,.59"/>
		</svg>
	