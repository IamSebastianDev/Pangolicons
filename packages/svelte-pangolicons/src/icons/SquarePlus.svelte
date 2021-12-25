
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
			class="pangolicons pangolicons-squarePlus {className}"
		>
			<line  x1="8.67" y1="12" x2="15.33" y2="12"/><line  x1="12" y1="15.33" x2="12" y2="8.67"/><rect  x="2" y="2" width="20" height="20" rx="3"/>
		</svg>
	