
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
			class="pangolicons pangolicons-wrench {className}"
		>
			<path  d="M13.88,13.32c9.62,1.6,8-8,8-8l-4,4-3.2-3.2,4-4s-9.61-1.6-8,8l-8,8a2.28,2.28,0,0,0,0,3.21h0a2.28,2.28,0,0,0,3.21,0Z"/>
		</svg>
	