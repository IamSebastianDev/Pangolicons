
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
			class="pangolicons pangolicons-moveDiagonalMirrored {className}"
		>
			<polyline  points="16 3.5 20.5 3.5 20.5 8"/><polyline  points="8 20.5 3.5 20.5 3.5 16"/><line  x1="3.5" y1="20.5" x2="20.5" y2="3.5"/>
		</svg>
	