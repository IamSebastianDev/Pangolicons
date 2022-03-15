
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
			class="pangolicons pangolicons-pieChart {className}"
			{ ...$$restProps }
		>
			<path  d="M9.16,2.41m12.84,9.59c0-5.52-4.48-10-10-10m10,10-.45,2.97M9.16,2.41C5.02,3.64,2,7.47,2,12c0,5.52,4.48,10,10,10,4.49,0,8.28-2.96,9.55-7.03M12,2V12h10"/>
		</svg>
	