
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
			class="pangolicons pangolicons-headingDecrease {className}"
			{ ...$$restProps }
		>
			<path  d="M10.57,20.57V3.43H2m17.14,7.14v10l-2.85-2.86,2.85,2.86L22,17.71M10.57,3.43h8.57"/>
		</svg>
	