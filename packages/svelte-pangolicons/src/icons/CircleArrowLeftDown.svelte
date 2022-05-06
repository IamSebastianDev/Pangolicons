
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
			class="pangolicons pangolicons-circleArrowLeftDown {className}"
			{ ...$$restProps }
		>
			<path  d="M8.67,15.33l6.66-6.66M8.67,15.33m5.12,0H8.67V10.2M22,12A10,10,0,1,0,12,22,10,10,0,0,0,22,12Z"/>
		</svg>
	