
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
			class="pangolicons pangolicons-login {className}"
		>
			<path  d="M14.06,2h3.66a3,3,0,0,1,3.17,2.85v14.3A3,3,0,0,1,17.72,22H14.06"/><polyline  points="11.44 16.44 14.22 12 11.44 7.56 14.22 12 3.11 12"/>
		</svg>
	