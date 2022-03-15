
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
			class="pangolicons pangolicons-rainbow {className}"
			{ ...$$restProps }
		>
			<path  d="M8,17c0-2.21,1.79-4,4-4s4,1.79,4,4m3,0c0-3.87-3.13-7-7-7s-7,3.13-7,7m17,0c0-5.52-4.48-10-10-10S2,11.48,2,17"/>
		</svg>
	