
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
			class="pangolicons pangolicons-server {className}"
		>
			<path  d="M21,20.88H3a1,1,0,0,1-1-1V15.21a1,1,0,0,1,1-1H21a1,1,0,0,1,1,1v4.67A1,1,0,0,1,21,20.88ZM6.67,17.21a.34.34,0,1,0,.33.33A.34.34,0,0,0,6.67,17.21Z"/><path  d="M21,9.79H3a1,1,0,0,1-1-1V4.12a1,1,0,0,1,1-1H21a1,1,0,0,1,1,1V8.79A1,1,0,0,1,21,9.79ZM17.17,6.12a.34.34,0,1,0,.33.34A.34.34,0,0,0,17.17,6.12Z"/>
		</svg>
	