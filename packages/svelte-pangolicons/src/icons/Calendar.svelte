
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
			class="pangolicons pangolicons-calendar {className}"
		>
			<rect  x="2" y="3.47" width="20" height="17.5" rx="1.4"/><line  x1="2" y1="9.12" x2="22" y2="9.12"/><line  x1="7" y1="5.01" x2="7" y2="1.26"/><line  x1="17" y1="5.01" x2="17" y2="1.26"/>
		</svg>
	