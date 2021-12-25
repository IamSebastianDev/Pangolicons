
		<script>
			export let className = '';
			export let size = '24';
			export let strokeWidth = '1.5';
			export let color = "currentColor";
			export let linejoin = "round";
			export let linecap = "round";
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
			class="pangolicons pangolicons-fader {className}"
		>
			<line  x1="12" y1="10.36" x2="12" y2="22"/><line  x1="12" y1="2" x2="12" y2="6.61"/><rect  x="8.25" y="6.61" width="7.5" height="3.75"/>
		</svg>
	