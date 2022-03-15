
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
			class="pangolicons pangolicons-cornerArrowUpRight {className}"
			{ ...$$restProps }
		>
			<path  d="M4.61,22V12.04c0-1.99,1.61-3.6,3.6-3.6h11.18l-6.44,6.44,6.44-6.44L12.95,2"/>
		</svg>
	