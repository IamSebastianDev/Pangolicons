
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
			class="pangolicons pangolicons-sunBig {className}"
		>
			<circle  cx="12" cy="12" r="5"/><line  x1="12" y1="2" x2="12" y2="7"/><line  x1="22" y1="12" x2="17" y2="12"/><line  x1="12" y1="22" x2="12" y2="17"/><line  x1="2" y1="12" x2="7" y2="12"/><line  x1="4.93" y1="4.93" x2="8.46" y2="8.46"/><line  x1="19.07" y1="4.93" x2="15.54" y2="8.46"/><line  x1="19.07" y1="19.07" x2="15.54" y2="15.54"/><line  x1="4.93" y1="19.07" x2="8.46" y2="15.54"/>
		</svg>
	