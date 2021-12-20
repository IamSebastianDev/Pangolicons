
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
			class="pangolicons pangolicons-phoneOutgoing {className}"
		>
			<path  d="M6.37,17.9C-1,9.71,3.2,2.07,3.2,2.07H7.42L8.48,6.29,6.37,8.4S4.26,9.46,9.53,14.73M6.37,17.9C14.75,25.07,22,20.48,22,20.48l-.11-4.22-4.25-.94-2.05,2.17S15,19.87,9.53,14.73"/><polyline  points="15.38 3.97 19.29 5.04 20.05 9.02 19.29 5.04 12.99 10.87"/>
		</svg>
	