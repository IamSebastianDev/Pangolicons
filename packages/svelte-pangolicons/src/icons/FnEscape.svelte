
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
			class="pangolicons pangolicons-fnEscape {className}"
			{ ...$$restProps }
		>
			<path  d="M12,6.12c3.25,0,5.88,2.63,5.88,5.88s-2.63,5.88-5.88,5.88-5.88-2.63-5.88-5.88m4.71-1.18L6.12,6.12m2.35,0h-2.35v2.35m15.88,12.03V3.5c0-.83-.67-1.5-1.5-1.5H3.5c-.83,0-1.5,.67-1.5,1.5V20.5c0,.83,.67,1.5,1.5,1.5H20.5c.83,0,1.5-.67,1.5-1.5Z"/>
		</svg>
	