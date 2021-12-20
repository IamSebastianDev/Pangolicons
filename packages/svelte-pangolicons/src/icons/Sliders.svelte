
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
			class="pangolicons pangolicons-sliders {className}"
		>
			<line  x1="12" y1="17.12" x2="12" y2="21.44"/><line  x1="12" y1="2.56" x2="12" y2="13.67"/><line  x1="19.78" y1="10.33" x2="19.78" y2="21.44"/><line  x1="19.78" y1="2.56" x2="19.78" y2="7.12"/><line  x1="4.22" y1="10.89" x2="4.22" y2="21.44"/><line  x1="4.22" y1="2.56" x2="4.22" y2="8.11"/><line  x1="2" y1="10.89" x2="6.44" y2="10.89"/><line  x1="9.78" y1="17.12" x2="14.22" y2="17.12"/><line  x1="17.56" y1="7.12" x2="22" y2="7.12"/>
		</svg>
	