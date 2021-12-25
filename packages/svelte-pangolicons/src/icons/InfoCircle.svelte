
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
			class="pangolicons pangolicons-infoCircle {className}"
		>
			<line  x1="12" y1="11.01" x2="12" y2="16.44"/><line  x1="12" y1="7.56" x2="12" y2="8.05"/><circle  cx="12" cy="12" r="10"/>
		</svg>
	