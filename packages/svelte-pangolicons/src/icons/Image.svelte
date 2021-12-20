
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
			class="pangolicons pangolicons-image {className}"
		>
			<rect  x="2" y="3.25" width="20" height="17.5" rx="1.4"/><line  x1="6.29" y1="7" x2="6.29" y2="7"/><line  x1="4.86" y1="20.75" x2="13.43" y2="13.25"/><line  x1="20.57" y1="19.5" x2="13.43" y2="13.25"/>
		</svg>
	