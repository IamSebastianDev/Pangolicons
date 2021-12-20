
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
			class="pangolicons pangolicons-microphone {className}"
		>
			<path  d="M12.64,13.43H11.36a1.5,1.5,0,0,1-1.5-1.5V3.5A1.5,1.5,0,0,1,11.36,2h1.28a1.5,1.5,0,0,1,1.5,1.5v8.43A1.5,1.5,0,0,1,12.64,13.43ZM6.29,11.29a5.71,5.71,0,0,0,11.42,0M12,17v4.94m2.14.06H9.86"/>
		</svg>
	