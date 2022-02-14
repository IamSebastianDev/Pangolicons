
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
			class="pangolicons pangolicons-move {className}"
		>
			<polyline  points="19.35 14.65 22 12 19.35 9.35"/><polyline  points="14.65 4.65 12 2 9.35 4.65"/><polyline  points="14.65 19.35 12 22 9.35 19.35"/><polyline  points="4.65 9.35 2 12 4.65 14.65"/><line  x1="12" y1="2" x2="12" y2="22"/><line  x1="2" y1="12" x2="22" y2="12"/>
		</svg>
	