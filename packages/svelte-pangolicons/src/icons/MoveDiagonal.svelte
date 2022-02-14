
		<script>
			let className = ''; 
			export {className as class}; 
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
			class="pangolicons pangolicons-moveDiagonal {className}"
		>
			<polyline  points="16 20.5 20.5 20.5 20.5 16"/><polyline  points="8 3.5 3.5 3.5 3.5 8"/><line  x1="3.5" y1="3.5" x2="20.5" y2="20.5"/>
		</svg>
	