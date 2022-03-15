
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
			class="pangolicons pangolicons-heart {className}"
			{ ...$$restProps }
		>
			<path  d="M11.94,7.49c0-3.03,2.39-5.49,5.35-5.49,.03,0,.06,0,.09,0,3.75,.06,5.85,4.54,3.84,7.79l-9.28,12.21L2.94,9.87c-2.24-3.15-.23-7.8,3.57-7.87,.03,0,.06,0,.09,0,2.95,0,5.35,2.46,5.35,5.49"/>
		</svg>
	