
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
			class="pangolicons pangolicons-list {className}"
		>
			<line  x1="6.29" y1="12" x2="22" y2="12"/><line  x1="6.29" y1="4.86" x2="22" y2="4.86"/><line  x1="6.29" y1="19.14" x2="22" y2="19.14"/><line  x1="2" y1="12" x2="2.14" y2="12"/><line  x1="2" y1="4.86" x2="2.14" y2="4.86"/><line  x1="2" y1="19.14" x2="2.11" y2="19.14"/>
		</svg>
	