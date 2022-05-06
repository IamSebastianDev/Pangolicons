
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
			class="pangolicons pangolicons-display {className}"
			{ ...$$restProps }
		>
			<path  d="M22,14.63a1.74,1.74,0,0,1-1.74,1.75H3.74A1.74,1.74,0,0,1,2,14.63V4.37A1.74,1.74,0,0,1,3.74,2.62H20.26A1.74,1.74,0,0,1,22,4.37ZM12,21.38m0-5v5H7m5,0h5"/>
		</svg>
	