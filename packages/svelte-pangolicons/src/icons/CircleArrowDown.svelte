
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
			class="pangolicons pangolicons-circleArrowDown {className}"
		>
			<polyline  points="15.63 13.09 12 16.71 8.37 13.09 12 16.71 12 7.29"/><circle  cx="12" cy="12" r="10"/>
		</svg>
	