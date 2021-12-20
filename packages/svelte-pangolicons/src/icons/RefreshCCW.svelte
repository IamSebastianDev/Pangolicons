
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
			class="pangolicons pangolicons-refreshCCW {className}"
		>
			<path  d="M20.23,13.85a8,8,0,0,0,.26-2A8.15,8.15,0,0,0,6.58,6.06M7.56,2l-1,4.06m.06,0,3.83,1.4"/><path  d="M3.77,10.15a8,8,0,0,0-.26,2,8.15,8.15,0,0,0,13.91,5.76m-1,4.06,1-4.06m-.06,0-3.83-1.4"/>
		</svg>
	