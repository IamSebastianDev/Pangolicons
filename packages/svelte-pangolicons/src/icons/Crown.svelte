
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
			class="pangolicons pangolicons-crown {className}"
			{ ...$$restProps }
		>
			<path  d="M2,16.24V5.7l4.89,5.82,4.92-5.83,5.56,5.83,4.63-6.18v10.91s-9.09,5.45-20,0Z"/>
		</svg>
	